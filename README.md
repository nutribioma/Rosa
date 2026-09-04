# ASIBRU — Sitio web

Sitio web corporativo de **ASIBRU**, empresa de instalaciones (electricidad,
fontanería, climatización, diseño de iluminación, placas solares y puntos de
recarga para coche eléctrico), con sede en Mallorca y servicio en toda España.

## Estructura

```
index.html              Página principal (sección única con anclas)
assets/css/styles.css   Estilos
assets/js/main.js       Menú móvil, scroll y animaciones de aparición
assets/img/             Logo e iconos (SVG) y favicons
```

Sitio estático, sin dependencias externas ni build: se puede abrir
`index.html` directamente en el navegador o servir con cualquier servidor
estático.

Para previsualizar en local:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Logo

El logo (`assets/img/logo-*.png`) está recortado de la fotografía del logo
que envió el cliente, con el fondo eliminado (PNG transparente). Es el logo
real, pero al venir de una foto (no de un vectorial) pierde nitidez si se
amplía mucho. Si en algún momento aparece el archivo original en formato
vectorial (SVG/AI/EPS) o un PNG en mayor resolución, lo ideal es
sustituir estos ficheros por esa versión, manteniendo los mismos nombres
en `assets/img/`:

- `logo-mark.png` — solo el icono (favicon, hero)
- `logo-horizontal.png` — icono + texto en azul marino, para fondos claros (cabecera)
- `logo-horizontal-white.png` — icono + texto en blanco, para fondos oscuros (pie de página)
- `logo-stacked.png` — icono sobre el texto (uso libre / redes sociales)

## Contacto que aparece en el sitio

- Teléfono: 606 531 967
- Email: info@asibru.com
