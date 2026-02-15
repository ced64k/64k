# SCSS Structure

This project uses SCSS for styling, compiled to CSS using Sass.

## File Structure

```
scss/
├── index.scss          # Main entry point, imports all partials
├── _variables.scss     # SCSS variables (colors, fonts, etc.)
├── _base.scss          # Base styles (reset, html, body, images)
├── _typography.scss    # Typography styles (links, code, etc.)
├── _layout.scss        # Layout styles (header, footer, main)
├── _navigation.scss    # Navigation menu styles
├── _posts.scss         # Blog post list and metadata styles
├── _message-box.scss   # Message box component
└── _prism-diff.scss    # Prism syntax highlighting for diffs
```

## Development Workflow

### Build CSS once:
```bash
npm run scss:build
```

### Watch SCSS for changes:
```bash
npm run scss:watch
```

### Development server (with SCSS watch):
```bash
npm start
```
This runs both the SCSS watcher and Eleventy dev server in parallel.

### Production build:
```bash
npm run build
```
This compiles SCSS and builds the Eleventy site.

## Adding New Styles

1. Create a new partial file: `scss/_mycomponent.scss`
2. Add your styles using SCSS features (nesting, variables, etc.)
3. Import it in `scss/index.scss`:
   ```scss
   @use 'mycomponent';
   ```
4. The styles will be automatically compiled on save when running `npm start`

## SCSS Features Used

- **Variables**: Defined in `_variables.scss`, imported with `@use`
- **Nesting**: Organize styles hierarchically
- **Partials**: Modular file structure with `_` prefix
- **Modern syntax**: Using `@use` instead of deprecated `@import`

## Output

Compiled CSS is generated at:
- `css/index.css` (compressed for production)

This file is:
- Automatically generated (don't edit manually)
- Ignored by Git (see `.gitignore`)
- Watched by Eleventy for live reload
