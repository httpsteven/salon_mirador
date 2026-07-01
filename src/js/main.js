import '../styles/main.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { CONTACT } from './config.js'

gsap.registerPlugin(ScrollTrigger)

document.documentElement.classList.add('js')

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* =============================================================
   0 · Inject real contact links from config
   ============================================================= */
function wireContact() {
  const set = (sel, href, text) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.setAttribute('href', href)
      if (text && el.dataset.keepText === undefined && el.children.length === 0) el.textContent = text
    })
  }
  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.waMessage)}`
  set('[data-wa]', waHref)
  set('[data-mail]', `mailto:${CONTACT.email}?subject=${encodeURIComponent(CONTACT.mailSubject)}`)
  set('[data-tel]', `tel:${CONTACT.phone}`, CONTACT.phoneLabel)
  set('[data-ig]', CONTACT.instagram)
  set('[data-maps]', CONTACT.maps)
  document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()))
}

/* =============================================================
   1 · Smooth scroll (Lenis) synced with ScrollTrigger
   ============================================================= */
let lenis
function initSmoothScroll() {
  if (reduceMotion) return
  lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
}

/* Anchor links → smooth scroll (works with and without Lenis) */
function initAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')
      if (id === '#' || id.length < 2) return
      const target = document.querySelector(id)
      if (!target) return
      e.preventDefault()
      closeMenu()
      if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.2 })
      else target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    })
  })
}

/* =============================================================
   2 · Nav (scrolled state) + progress bar
   ============================================================= */
function initNav() {
  const nav = document.querySelector('[data-nav]')
  const bar = document.querySelector('[data-progress]')
  const onScroll = () => {
    const y = window.scrollY
    nav.classList.toggle('is-scrolled', y > window.innerHeight * 0.7)
    const max = document.documentElement.scrollHeight - window.innerHeight
    if (bar) bar.style.width = `${Math.min(100, (y / max) * 100)}%`
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

/* =============================================================
   3 · Mobile menu
   ============================================================= */
const menu = document.querySelector('[data-menu]')
function openMenu() { menu.hidden = false; requestAnimationFrame(() => menu.classList.add('is-open')); document.body.classList.add('menu-open'); if (lenis) lenis.stop() }
function closeMenu() { if (!menu) return; menu.classList.remove('is-open'); document.body.classList.remove('menu-open'); if (lenis) lenis.start(); setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true }, 500) }
function initMenu() {
  const toggle = document.querySelector('[data-menu-toggle]')
  if (!toggle) return
  toggle.addEventListener('click', () => {
    const open = document.body.classList.contains('menu-open')
    open ? closeMenu() : openMenu()
    toggle.setAttribute('aria-expanded', String(!open))
  })
}

/* =============================================================
   4 · Hero intro timeline
   ============================================================= */
/* Ensure the hero video actually plays. Some browsers (iOS low-power mode,
   strict autoplay policies) block autoplay; retry on first interaction.
   The poster image guarantees a visible frame in every case. */
function initHeroVideo() {
  const video = document.querySelector('[data-hero-video]')
  if (!video) return
  const tryPlay = () => {
    const p = video.play()
    if (p && p.catch) p.catch(() => {})
  }
  tryPlay()
  const onInteract = () => { tryPlay(); cleanup() }
  const cleanup = () => ['touchstart', 'click', 'scroll', 'keydown'].forEach((e) => window.removeEventListener(e, onInteract))
  ;['touchstart', 'click', 'scroll', 'keydown'].forEach((e) => window.addEventListener(e, onInteract, { once: true, passive: true }))
  document.addEventListener('visibilitychange', () => { if (!document.hidden) tryPlay() })
}

function initHero() {
  const lines = gsap.utils.toArray('[data-hero-line]')
  const els = gsap.utils.toArray('[data-hero-el]')
  if (reduceMotion) { gsap.set([...lines, ...els], { opacity: 1, y: 0 }); return }

  gsap.set(lines, { yPercent: 120 })
  gsap.set(els, { opacity: 0, y: 24 })

  const tl = gsap.timeline({ delay: 0.25, defaults: { ease: 'power4.out' } })
  tl.to(lines, { yPercent: 0, duration: 1.2, stagger: 0.12 })
    .to(els, { opacity: 1, y: 0, duration: 1, stagger: 0.12 }, '-=0.7')

  // Hero parallax on scroll
  const video = document.querySelector('[data-hero-video]')
  if (video) {
    gsap.to(video, {
      yPercent: 14, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    })
  }
  gsap.to('.hero__content', {
    yPercent: -18, opacity: 0.4, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  })
}

/* =============================================================
   5 · Scroll reveals
   ============================================================= */
function initReveals() {
  if (reduceMotion) return
  const base = { y: 40, opacity: 0 }

  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.from(el, { ...base, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' } })
  })

  gsap.utils.toArray('[data-reveal-stagger]').forEach((group) => {
    gsap.from(group.children, { ...base, y: 30, duration: 0.9, ease: 'power3.out', stagger: 0.09,
      scrollTrigger: { trigger: group, start: 'top 82%' } })
  })

  // Word-by-word reveal
  gsap.utils.toArray('[data-reveal-words]').forEach((el) => {
    const words = el.textContent.trim().split(/\s+/)
    el.innerHTML = words.map((w) => `<span class="rw"><span>${w}</span></span>`).join(' ')
    el.querySelectorAll('.rw').forEach((s) => { s.style.display = 'inline-block'; s.style.overflow = 'hidden'; s.firstChild.style.display = 'inline-block' })
    gsap.from(el.querySelectorAll('.rw > span'), {
      yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.03,
      scrollTrigger: { trigger: el, start: 'top 80%' }
    })
  })

  // Image reveal (clip)
  gsap.utils.toArray('[data-reveal-img]').forEach((el) => {
    gsap.from(el, {
      clipPath: 'inset(100% 0% 0% 0%)', duration: 1.3, ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    })
  })

  // Parallax images inside overflow wrappers
  gsap.utils.toArray('[data-parallax]').forEach((img) => {
    gsap.fromTo(img, { yPercent: -8 }, {
      yPercent: 8, ease: 'none',
      scrollTrigger: { trigger: img.closest('[data-parallax-wrap]') || img, start: 'top bottom', end: 'bottom top', scrub: true }
    })
  })
}

/* =============================================================
   6 · Sticky storytelling
   ============================================================= */
function initStory() {
  const section = document.querySelector('[data-story]')
  if (!section) return
  const imgs = gsap.utils.toArray('[data-story-img]')
  const steps = gsap.utils.toArray('[data-story-step]')
  const counter = section.querySelector('[data-story-count]')

  const activate = (i) => {
    imgs.forEach((im, k) => im.classList.toggle('is-active', k === i))
    if (counter) counter.textContent = String(i + 1).padStart(2, '0')
  }

  steps.forEach((step, i) => {
    ScrollTrigger.create({
      trigger: step,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => activate(i),
      onEnterBack: () => activate(i)
    })
  })
}

/* =============================================================
   7 · Quotes rotator
   ============================================================= */
function initQuotes() {
  const quotes = [
    { text: 'Buscábamos un lugar diferente y encontramos mucho más. La vista al atardecer dejó a todos nuestros invitados sin palabras.', by: '— Novios · Boda en Mirador' },
    { text: 'Un espacio que se siente cuidado en cada detalle. El equipo hizo que todo fluyera sin una sola preocupación.', by: '— Familia · XV Años' },
    { text: 'La combinación de arquitectura y paisaje convirtió nuestro evento en algo que nadie olvidó.', by: '— Evento corporativo' }
  ]
  const textEl = document.querySelector('[data-quote] .quote__text')
  const byEl = document.querySelector('[data-quote] .quote__by')
  if (!textEl) return
  let i = 0
  const render = () => {
    gsap.to([textEl, byEl], { opacity: 0, y: -8, duration: 0.35, ease: 'power2.in', onComplete: () => {
      textEl.textContent = `“${quotes[i].text}”`
      byEl.textContent = quotes[i].by
      gsap.fromTo([textEl, byEl], { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' })
    } })
  }
  const go = (dir) => { i = (i + dir + quotes.length) % quotes.length; render() }
  document.querySelector('[data-quote-next]')?.addEventListener('click', () => go(1))
  document.querySelector('[data-quote-prev]')?.addEventListener('click', () => go(-1))
  let timer = setInterval(() => go(1), 7000)
  document.querySelector('.quotes')?.addEventListener('pointerenter', () => clearInterval(timer))
}

/* =============================================================
   8 · FAQ accordion (smooth height)
   ============================================================= */
function initFAQ() {
  document.querySelectorAll('.qa').forEach((qa) => {
    const summary = qa.querySelector('summary')
    const body = qa.querySelector('.qa__body')
    summary.addEventListener('click', (e) => {
      e.preventDefault()
      const isOpen = qa.hasAttribute('open')
      // close siblings
      qa.parentElement.querySelectorAll('.qa[open]').forEach((other) => {
        if (other !== qa) {
          gsap.to(other.querySelector('.qa__body'), { height: 0, duration: 0.4, ease: 'power2.inOut', onComplete: () => other.removeAttribute('open') })
        }
      })
      if (isOpen) {
        gsap.to(body, { height: 0, duration: 0.4, ease: 'power2.inOut', onComplete: () => qa.removeAttribute('open') })
      } else {
        qa.setAttribute('open', '')
        gsap.fromTo(body, { height: 0 }, { height: 'auto', duration: 0.5, ease: 'power2.out' })
      }
    })
  })
}

/* =============================================================
   Boot
   ============================================================= */
function boot() {
  wireContact()
  initSmoothScroll()
  initAnchors()
  initNav()
  initMenu()
  initHeroVideo()
  initHero()
  initReveals()
  initStory()
  initQuotes()
  initFAQ()
  ScrollTrigger.refresh()
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot)
else boot()

// Recalc after fonts load (layout shifts)
document.fonts?.ready.then(() => ScrollTrigger.refresh())
window.addEventListener('load', () => ScrollTrigger.refresh())
