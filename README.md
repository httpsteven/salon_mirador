# Salón Mirador

Sitio web premium para **Salón Mirador**, un salón de eventos de arquitectura contemporánea suspendido entre la sierra y el valle. Web estática, cinematográfica y de alto rendimiento, lista para **GitHub Pages**.

**En vivo:** https://httpsteven.github.io/salon_mirador/

---

## Stack

- **HTML / CSS / JavaScript** estático (sin backend).
- **[Vite](https://vitejs.dev/)** — build y servidor de desarrollo.
- **[GSAP](https://gsap.com/) + ScrollTrigger** — motion premium (reveals, parallax, storytelling con scroll).
- **[Lenis](https://lenis.darkroom.engineering/)** — scroll suave.
- Fuentes: **Fraunces** (display editorial) + **Inter** (texto).

Se eligió arquitectura estática premium sobre React/Next porque es la que mejor equilibra máxima calidad visual, fricción técnica mínima y despliegue gratuito en GitHub Pages, para una home basada en fotografía, ritmo y motion.

---

## Desarrollo local

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # genera la versión de producción en dist/
npm run preview  # sirve dist/ localmente para revisar el build
```

---

## Editar los datos de contacto

Todos los botones de **WhatsApp, correo, teléfono, Instagram y Google Maps** se generan desde un único archivo:

> **`src/js/config.js`**

Abre ese archivo y reemplaza los valores de ejemplo por los reales (número de WhatsApp, correo, teléfono, enlaces de Instagram y Maps). No hace falta tocar el HTML.

### Otros textos editables (marcados con comentarios en el código)

- **Testimonios** — en `src/js/main.js`, función `initQuotes()`. Reemplaza por reseñas reales verificadas (Google/clientes).
- **FAQ / capacidad / servicios** — en `index.html`, sección `#faq`. Las respuestas están redactadas en general; conviene confirmar cifras exactas (aforo, paquetes) con el cliente antes de publicarlas.

---

## Imágenes y video

Los recursos usados en la web viven en **`public/media/`**. Las fotos originales del cliente están en **`pictures/`** (no se usan todas: se hizo una curaduría severa priorizando composición, luz y percepción premium).

El hero usa un loop de video optimizado (`hero-loop.mp4` / `.webm`, ~3 MB) recortado del video original de 10 MB, con `hero-poster.jpg` como fallback.

Para reemplazar una imagen: sustituye el archivo en `public/media/` conservando el mismo nombre, o actualiza la referencia en `index.html`.

---

## Publicar en GitHub Pages

El repositorio ya incluye un workflow (`.github/workflows/deploy.yml`) que **construye y publica automáticamente** en cada `push` a `main`.

Si necesitas configurarlo desde cero en otro repositorio:

1. Sube el proyecto a GitHub (rama `main`).
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Cada push a `main` reconstruye y despliega el sitio.

> El build usa `base: './'` (rutas relativas), por lo que funciona en un *project site*
> (`usuario.github.io/repo/`), en una página de usuario o en un dominio propio, sin
> cambiar configuración.

### Dominio propio (opcional)

Añade un archivo `public/CNAME` con tu dominio (p. ej. `salonmirador.com`) y configúralo en Settings → Pages.

---

## Accesibilidad y rendimiento

- Respeta `prefers-reduced-motion` (desactiva animaciones y scroll suave).
- HTML semántico, textos `alt` descriptivos, foco visible.
- Imágenes `lazy`, video comprimido con `poster`, animaciones sobre `transform`/`opacity`.

---

## Ideas para una v2 (infraestructura más avanzada)

- Formulario de contacto real con Formspree/Netlify Forms o un backend ligero.
- CMS headless (Sanity/Contentful) para que el cliente edite textos e imágenes.
- Galería ampliada con lightbox y más material fotográfico profesional.
- Migración a Next.js si se requieren páginas adicionales, blog o reservas en línea.
- Integración con Google Reviews para testimonios en vivo.
