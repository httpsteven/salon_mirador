# Prompt final para Claude Code — web premium para salón de eventos

## Decisión final de stack y skills

Después de revisar el ecosistema disponible, esta es la combinación más sólida para este proyecto si el objetivo es **máximo nivel visual + coste inicial mínimo + despliegue inicial en GitHub Pages**:

| Prioridad | Herramienta / skill | Estado recomendado | Enlace |
|---|---|---|---|
| Diseño premium principal | `frontend-design` | **Obligatoria** | https://github.com/anthropics/skills |
| Research de skills instalables | `find-skills` | **Muy recomendable** | https://github.com/vercel-labs/skills |
| Motion premium | GSAP skill / bundle con ScrollTrigger | **Obligatoria si hay scroll storytelling fuerte** | https://skills.sh |
| Testing visual y responsive | Playwright MCP / plugin | **Obligatoria** | https://github.com/anthropics/claude-plugins-official |
| Documentación viva | Context7 | **Muy recomendable** | https://github.com/anthropics/claude-plugins-official |
| Guidelines React/Next | Vercel React best practices | **Recomendable si se usa React/Next** | https://github.com/vercel-labs/agent-skills |
| Guidelines visuales web | Web design guidelines | **Muy recomendable** | https://github.com/vercel-labs/agent-skills |
| Curaduría extra de frontend | Claude Code Frontend Design Toolkit | **Referencia excelente** | https://github.com/wilwaldon/Claude-Code-Frontend-Design-Toolkit |
| Anclas estéticas | `frontend-design` alternativo de Ilm Alan | **Opcional pero muy útil** | https://github.com/Ilm-Alan/frontend-design |
| Diseño por proceso | `designer-skills` | **Opcional avanzado** | https://github.com/julianoczkowski/designer-skills |

## Conclusión técnica

No veo una tecnología claramente mejor que supere esta estrategia para tu caso concreto.[cite:18][cite:33]

La mejor decisión para una primera versión premium y gratis es una de estas dos:

1. **HTML/CSS/JS premium + GSAP + GitHub Pages**, si quieres el mejor equilibrio entre lujo visual, control fino y despliegue gratuito sencillo.[cite:2][cite:6][cite:18]
2. **React o Next.js exportable + GSAP/Motion**, solo si quieres dejar mejor base para escalar luego y aceptas más complejidad desde el principio.[cite:18][cite:33]

Para un salón de eventos con mucha fotografía, narrativa visual y deseo aspiracional, la opción 1 suele ser la más eficiente y peligrosa en el buen sentido: menos fricción técnica, más foco en arte, ritmo y percepción premium.[cite:2][cite:18]

## Instalación recomendada si no tiene las skills

Si Claude Code no tiene estas skills o plugins, pídele que use los enlaces y comandos de instalación adecuados.

### Skills base

```bash
# Skills oficiales / públicas
npx skills add anthropics/skills@frontend-design -g -y
npx skills add anthropics/skills@skill-creator -g -y
npx skills add vercel-labs/skills@find-skills -g -y
npx skills add vercel-labs/agent-skills@web-design-guidelines -g -y
npx skills add vercel-labs/agent-skills@react-best-practices -g -y
npx skills add vercel-labs/agent-skills@composition-patterns -g -y
```

Estas rutas y comandos aparecen documentados en configuraciones públicas de Claude Code centradas en skills oficiales de Anthropic y Vercel.[cite:33]

### Plugins / MCPs útiles

Instalar dentro de Claude Code, usando plugins oficiales cuando estén disponibles:

- Frontend Design plugin: [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)[cite:33]
- Playwright plugin: [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)[cite:33]
- Context7 plugin: [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)[cite:33]

Si el entorno usa MCP por terminal, una base muy buena es esta:

```bash
claude mcp add context7 -s user -- npx -y @upstash/context7-mcp@latest
claude mcp add playwright -s user -- npx @playwright/mcp@latest
```

Ese stack se recomienda en toolkits públicos dedicados a mejorar el output frontend de Claude Code.[cite:18]

### Búsqueda e instalación de skills adicionales

Si Claude no encuentra una skill exacta de GSAP o motion premium, debe buscarla en estos sitios antes de improvisar:

- [skills.sh](https://skills.sh) — marketplace / registry de skills usado ampliamente en el ecosistema actual.[cite:6][cite:20]
- [Awesome Claude Skills](https://github.com/travisvn/awesome-claude-skills) — directorio curado de skills y recursos.[cite:17]
- [Claude Code Frontend Design Toolkit](https://github.com/wilwaldon/Claude-Code-Frontend-Design-Toolkit) — probablemente la mejor referencia práctica para frontend bonito con Claude Code.[cite:18]
- [Ilm-Alan/frontend-design](https://github.com/Ilm-Alan/frontend-design) — útil para fijar una dirección estética mucho más estricta.[cite:29]
- [designer-skills](https://github.com/julianoczkowski/designer-skills) — útil si se quiere un proceso entero de brief, IA, tokens, tareas, frontend y design review.[cite:40]

## Prompt final listo para pegar en Claude Code

```md
Quiero que actúes como un **director creativo senior**, **staff frontend engineer**, **motion designer para web premium** y **arquitecto de experiencia digital de lujo**.

Vas a crear la web de un **salón de eventos** y quiero un resultado que se perciba como una web de agencia top-tier, con nivel visual y técnico altísimo, sensación premium real y acabado equivalente a un proyecto de **10.000 USD o más**.

## Contexto principal

La web debe transmitir exclusividad, deseo, elegancia, confianza y altísima calidad percibida.

No debe parecer una landing genérica generada por IA.
No debe parecer una plantilla SaaS.
No debe parecer una web “correcta”.

Debe sentirse como una experiencia premium, refinada, editorial y cinematográfica.

## Objetivo técnico y económico

La primera versión debe construirse de la manera **más potente posible usando herramientas gratuitas o casi gratuitas**, y debe quedar lista para despliegue inicial en **GitHub Pages**.

Por lo tanto:

- prioriza arquitectura estática o exportable;
- evita dependencias que exijan backend obligatorio;
- evita SSR si complica el deploy gratis;
- y si hay duda entre stack moderno complejo y stack estático premium muy bien hecho, prioriza el segundo.

## Tu primera tarea: revisar capacidades instaladas

Antes de hacer nada, revisa si tienes disponibles estas skills, plugins o equivalentes:

1. `frontend-design`
2. `find-skills`
3. una skill de GSAP / ScrollTrigger o motion premium
4. Playwright MCP o plugin Playwright
5. Context7 o acceso a documentación actualizada
6. `web-design-guidelines`
7. `react-best-practices` y `composition-patterns` si decides usar React o Next

Si alguna no está disponible, usa los enlaces y fuentes de instalación siguientes para localizarla, instalarla o proponer el equivalente más fuerte:

- Anthropic official skills: https://github.com/anthropics/skills
- Anthropic official plugins: https://github.com/anthropics/claude-plugins-official
- Vercel agent skills: https://github.com/vercel-labs/agent-skills
- Vercel skills registry / CLI: https://github.com/vercel-labs/skills
- Skills marketplace: https://skills.sh
- Awesome Claude Skills: https://github.com/travisvn/awesome-claude-skills
- Claude Code Frontend Design Toolkit: https://github.com/wilwaldon/Claude-Code-Frontend-Design-Toolkit
- Ilm Alan frontend-design: https://github.com/Ilm-Alan/frontend-design
- Designer skills workflow: https://github.com/julianoczkowski/designer-skills

Si no puedes instalar una skill exacta, elige la mejor alternativa pública y gratuita disponible.

## Regla de decisión de stack

Debes decidir el stack según esta lógica:

### Opción preferida para esta web
**HTML/CSS/JS premium + GSAP + GitHub Pages**

Elige esta opción si buscas la máxima calidad visual con la menor fricción técnica y el mejor encaje con una home premium de storytelling, fotografía y motion.

### Opción secundaria
**React o Next.js exportable + GSAP/Motion**

Elige esta solo si detectas una ventaja real para escalabilidad futura o componentes complejos, sin romper la simplicidad del deploy inicial.

No elijas React o Next por costumbre. Elige la arquitectura en función del resultado final y del despliegue gratis.

## Inputs que vas a recibir

Te voy a proporcionar:

- una carpeta local con fotos del negocio;
- links de Google Business / Google Maps;
- links de Instagram y otras redes sociales;
- y cualquier dato adicional del cliente.

## Investigación obligatoria del negocio

Con esos inputs debes:

1. analizar las imágenes locales primero;
2. extraer información útil de la ficha de Google;
3. analizar redes sociales para entender estilo visual, tono, público y tipo de eventos;
4. inferir la propuesta de valor del negocio;
5. estructurar la información comercial necesaria para la web.

Debes extraer o inferir con prudencia:

- propuesta de valor,
- públicos objetivo,
- tipos de evento,
- ventajas competitivas,
- tono aspiracional,
- prueba social o reputación,
- preguntas frecuentes,
- y llamadas a la acción.

No inventes datos críticos no confirmados.

## Regla estricta de curaduría visual

No uses todas las imágenes.

Haz una **selección severa** y usa solo aquellas que eleven la percepción de lujo.

Criterios de selección:

- mejor composición,
- mejor iluminación,
- mejor resolución,
- mayor limpieza visual,
- atmósfera aspiracional,
- capacidad real de vender el espacio,
- variedad suficiente entre planos,
- coherencia con una marca premium.

Descarta:

- fotos repetidas,
- fotos flojas,
- imágenes pixeladas,
- imágenes mediocres,
- material informal,
- branding pobre,
- y cualquier foto que baje la percepción de valor.

Si faltan recursos visuales secundarios, puedes generar o construir:

- iconografía,
- patrones,
- separadores,
- overlays,
- gráficos decorativos,
- fondos sutiles,
- o SVGs de alto nivel,

siempre manteniendo una estética sobria y premium.

## Estándar visual obligatorio

Quiero dirección de arte real.

Eso significa:

- composición editorial,
- ritmo visual entre secciones,
- excelente jerarquía tipográfica,
- gran uso del espacio en blanco,
- fotografía protagonista,
- contrastes bien medidos,
- y una interfaz que se sienta cara.

La referencia emocional es la precisión y el nivel de detalle de marcas como Apple, Porsche o estudios de diseño digital de lujo.

## Anti-patrones prohibidos

No quiero:

- grids genéricos de tres tarjetas iguales,
- iconos en círculos de colores,
- gradientes cliché,
- secciones clónicas,
- estilos “startup SaaS template”,
- exceso de glassmorphism gratuito,
- exceso de efectos que resten elegancia,
- ni copy genérico de IA.

Todo debe sentirse específico, deliberado y de alto gusto.

## Motion design obligatorio

La web debe tener motion premium.

Quiero:

- reveals elegantes,
- text stagger refinado,
- image transitions,
- parallax sutil,
- sticky storytelling sections,
- hover states cuidados,
- y microinteracciones con timing excelente.

Reglas:

- usa GSAP + ScrollTrigger si aporta ventaja real;
- si usas React, combina GSAP con Motion solo donde tenga sentido;
- anima sobre todo `transform` y `opacity`;
- cuida mucho el easing, el timing y la secuencia;
- respeta `prefers-reduced-motion`;
- y evita animaciones gratuitas o cargantes.

## Design system obligatorio

Antes de construir la web final, define y luego aplica:

1. concepto visual;
2. moodboard textual;
3. tipografías;
4. paleta de color;
5. sistema de espaciado;
6. sistema de superficies, bordes y sombras;
7. reglas de motion;
8. reglas responsive;
9. criterio de fotografía;
10. tono editorial del copy.

## Estructura deseada de la web

Puedes mejorarla si encuentras una narrativa superior, pero como base quiero:

1. Hero impactante.
2. Presentación aspiracional del espacio.
3. Galería curada.
4. Tipos de eventos.
5. Diferenciales del salón.
6. Experiencia y atmósfera.
7. Reputación / prueba social, si puede sostenerse.
8. FAQs.
9. CTA principal de contacto o reserva.
10. Footer premium.

## Copywriting

El copy debe ser:

- premium,
- seguro,
- sofisticado,
- emocional sin ser cursi,
- comercial sin ser agresivo,
- y específico para este negocio.

No uses frases vacías o intercambiables.
Cada titular debe sentirse escrito para este salón y no para cualquier empresa.

## Fases obligatorias de trabajo

### Fase 1 — Auditoría de entorno
- Revisa skills, plugins y MCPs disponibles.
- Si faltan, usa los enlaces dados para instalar o proponer alternativas.
- Elige el stack final y justifícalo.

### Fase 2 — Investigación
- Audita fotos locales.
- Audita la ficha de Google.
- Audita Instagram y otras redes.
- Resume posicionamiento, tono y oportunidades narrativas.

### Fase 3 — Dirección creativa
- Define concepto.
- Define sistema visual.
- Define tipografía, color, motion y estructura.
- Define criterio de curaduría de imágenes.

### Fase 4 — Curaduría visual
- Selecciona las mejores imágenes.
- Organízalas por sección.
- Explica por qué cada grupo de imágenes se usa en cada bloque.

### Fase 5 — Construcción
- Implementa la web premium.
- Haz que se sienta costosa, refinada y memorable.
- Prioriza ritmo, fotografía, detalle y motion de alto nivel.

### Fase 6 — Polish intensivo
- Revisa composición, spacing, responsive, contrastes, copy, motion y rendimiento.
- Elimina cualquier rasgo de template o output genérico de IA.

### Fase 7 — Entrega
- Deja el proyecto listo para GitHub Pages.
- Añade README con instrucciones claras de publicación.
- Indica posibles mejoras para una futura versión en infraestructura cloud más avanzada.

## Prioridades absolutas

Ordena cada decisión según esta jerarquía:

1. Percepción premium.
2. Dirección de arte.
3. Curaduría fotográfica.
4. Motion design.
5. Compatibilidad con GitHub Pages.
6. Coste cero o casi cero.
7. Rendimiento.
8. Accesibilidad.

## Instrucción final

Quiero que tomes decisiones como un equipo de agencia elite que sabe usar herramientas gratuitas de forma estratégica.

No actúes como generador automático de landing pages.
Actúa como diseñador premium, director de arte digital y frontend engineer obsesionado con el detalle.

Si dudas entre una solución simple y una solución más premium, elige la premium siempre que no rompa el deploy gratis, no complique innecesariamente el mantenimiento y no degrade seriamente el rendimiento.
```

## Recomendación final para ti

La versión del prompt que más sentido tiene **hoy** para este proyecto ya es esta: no cambiaría la filosofía general, porque combina bien skills oficiales, ecosistema GitHub público, motion potente, validación con Playwright y publicación gratis.[cite:18][cite:33][cite:40]

Lo único que variaría caso a caso sería la decisión final entre web estática premium o React/Next exportable, pero el prompt ya fuerza a Claude a elegir racionalmente en función del deploy, del presupuesto y del nivel visual que buscas.[cite:2][cite:18]
