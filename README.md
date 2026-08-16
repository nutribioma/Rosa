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

El logo (`assets/img/logo-*.svg`) es una **recreación vectorial** hecha a
partir de una fotografía/vídeo del logo original mostrado en un monitor
(no se recibió el archivo original en alta calidad). Reproduce fielmente
la composición y los colores, pero para máxima fidelidad lo ideal es
sustituirlo por el archivo original (SVG, AI o PNG con fondo transparente)
en cuanto esté disponible — bastará con reemplazar los ficheros en
`assets/img/` manteniendo los mismos nombres.

## Contacto que aparece en el sitio

- Teléfono: 606 531 967
- Email: info@asibru.com
