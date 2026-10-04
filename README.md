# josepoveda.es — web personal de José Poveda | Po

Web estática (HTML + CSS, con un único script mínimo para el menú móvil). Sin servidor, sin base de datos, sin cookies, sin analítica, sin recursos externos.

**Estado: versión de revisión. No está publicada y el dominio josepoveda.es no está conectado.**

## Estructura

```
/
  index.html          Home (Inicio, Presentación, Proyectos, Libros, Idea, Contacto)
  sobre-mi.html       Página «Sobre mí»
  aviso-legal.html    Aviso legal y privacidad (noindex, fuera del sitemap)
  css/styles.css      Todos los estilos y variables (colores, tipografías)
  js/main.js          Solo el menú plegable en móvil
  assets/
    favicon.svg       Favicon (la sigla «Po»)
    images/           Ilustración del Hero y cubiertas de los libros
  robots.txt
  sitemap.xml
  README.md
```

## Previsualizar

Abre `index.html` con doble clic: funciona sin servidor porque todos los enlaces internos son relativos. Opcionalmente, desde la carpeta: `python3 -m http.server 8000` y visita http://localhost:8000.

## Modificar textos

Edita directamente `index.html`, `sobre-mi.html` y `aviso-legal.html`.

**LinkedIn:** en `index.html`, sección `#contacto`, hay un bloque comentado con el enlace listo. Cuando se confirme la URL exacta del perfil, sustituye `URL_EXACTA_DEL_PERFIL` y quita los marcadores de comentario. Si se añade, conviene mencionarlo también en `aviso-legal.html`, sección «Enlaces externos».

## Colores y tipografías

Al principio de `css/styles.css`, en `:root`. Las fuentes son las del sistema (sin descargas ni licencias).

## Sustituir imágenes

1. Guarda la nueva imagen en `assets/images/` con el mismo nombre para no tocar el HTML (`jose-poveda-escribiendo.webp`, `el-diario-del-abuelo-po.jpg`, `lo-que-queda-cuando-se-apagan-las-luces.jpg`, `la-conciencia-que-se-construye.jpg`).
2. Si cambian las proporciones, actualiza los atributos `width` y `height` de la etiqueta `<img>` en `index.html`.
3. **Imagen para redes sociales:** `assets/images/jose-poveda-social.jpg` (1200×630). Si se cambia, mantén el nombre y las dimensiones; los metadatos de `og:image` y `twitter:image` en el `<head>` de `index.html` ya apuntan a ella.

## Publicar en GitHub Pages (cuando se autorice)

1. Crea un repositorio y sube el contenido de esta carpeta a la raíz.
2. En *Settings → Pages*, elige *Deploy from a branch*, rama `main`, carpeta `/ (root)`.
3. La web quedará en `https://USUARIO.github.io/REPOSITORIO/`. Para ese enlace temporal, los enlaces relativos funcionan igual.

## Dominio personalizado (solo documentación; no se ha hecho nada)

Cuando se decida conectar josepoveda.es:

1. Crea en la raíz un archivo `CNAME` cuyo único contenido sea `josepoveda.es`.
2. En el proveedor del dominio, añade registros DNS:
   - cuatro registros `A` para `@` apuntando a `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`;
   - un `CNAME` para `www` apuntando a `USUARIO.github.io`.
   (Comprueba las IP vigentes en la documentación oficial de GitHub Pages antes de configurarlas.)
3. En *Settings → Pages → Custom domain*, escribe `josepoveda.es` y activa *Enforce HTTPS* cuando esté disponible.

## Antes de publicar

- Confirmar si se añade LinkedIn (ver arriba).
- Revisar el aviso legal y privacidad (conviene una revisión profesional si la web llegase a tener actividad económica o formularios).
- Sustituir las cubiertas provisionales cuando existan los originales.
- Decidir si se conserva el favicon actual.
