# cookieco.cl

Respaldo de la web de **Cookie Co** (www.cookieco.cl), hecha por [GetNexus](https://getnexus.cl).

Copia exacta de lo publicado el 11 de noviembre de 2026: páginas, catálogo, sistema de diseño y fotos. Es un sitio estático, sin paso de compilación.

| Archivo | Qué es |
| --- | --- |
| `index.html` | La web pública (catálogo, arma tu caja, historia, pedidos por WhatsApp) |
| `ig.html` | Página de enlaces para la biografía de Instagram (`/ig`) |
| `admin.html` | Panel para editar el catálogo |
| `support.js` | Motor de las plantillas `{{ }}` de las páginas |
| `data/catalogo.js` | Sabores, precios y fotos |
| `data/supabase-config.js` | Conexión a Supabase (solo la clave pública, pensada para ir en el navegador) |
| `_ds/…` | Sistema de diseño de Cookie Co (colores, tipografías, componentes) |
| `assets/` | Sello de la marca, íconos y fotos de las cookies |

## Verlo en local

```bash
python3 -m http.server 8000
# http://localhost:8000/
```

## Publicar desde aquí

Hoy el proyecto de Vercel (`nueva-web-app-cookie-co-…`) se publica subiendo archivos, no desde este repositorio. Para pasar a publicar desde GitHub: en Vercel, *Settings → Git → Connect* a `getnexu/cookieco.cl`, y en *Build & Development Settings* dejar vacíos el comando de compilación y el directorio de salida (este `vercel.json` ya no los define). Vercel Web Analytics se activa en el panel del proyecto.
