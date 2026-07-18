# Bly Optimizer

Landing page para ofrecer servicios de optimización, configuración,
instalación de programas y mejora de rendimiento para computadoras.

## Carpetas principales

- `app/`: contenido, estructura y estilos de la página.
- `public/`: favicon y recursos públicos.
- `.openai/`, `build/` y `worker/`: soporte técnico de la publicación original.

Las carpetas técnicas están ocultas en el Explorador de VS Code para mantener
una vista limpia, pero permanecen disponibles para las herramientas del proyecto.

## Desarrollo local

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

La página estará disponible normalmente en `http://localhost:3000`.

## Verificación

```bash
npm run build
npm run lint
```

## Publicar cambios

```bash
git add .
git commit -m "Actualizar página"
git push
```

Vercel detectará automáticamente los cambios enviados a la rama `main`.

