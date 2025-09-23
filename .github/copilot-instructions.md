# GitHub Copilot Instructions

This HPZ landing page project uses modern React 19.1.1 with Vite for the hackathon. Understanding the architectural patterns and tooling setup will help you contribute effectively.

## Architecture Overview

**Page-Component Pattern**: The app follows a clear separation where `App.jsx` renders page components from `src/pages/`, and pages import shared components from `src/components/`. For example:

- `App.jsx` → `HomePage.jsx` → `Navbar.jsx`
- Use semantic HTML wrappers: `<main>` in App, page-specific containers in pages

**Motion Integration**: All animations use the `motion` library (not framer-motion). Import as:

```jsx
import { motion } from "motion/react"
```

Components use motion.div with initial/animate/transition props for entrance animations.

## Development Setup

**Key Dependencies**:

- Tailwind CSS 4.1.13 with DaisyUI components (`@plugin "daisyui"` in index.css)
- Motion 12.23.18 for animations
- React 19.1.1 with modern concurrent features

**Build Commands**:

- `npm run dev` - Start development server
- `npm run build` - Production build via Vite
- `npm run lint` - ESLint check

## Project-Specific Conventions

**File Extensions**: Use `.jsx` for all React components (no TypeScript in this project).

**ESLint Custom Rule**: Variables starting with uppercase/underscore can be unused:

```javascript
'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]
```

**CSS Setup**:

- Import order: `@import "tailwindcss"` then `@plugin "daisyui"`
- Geist font family as primary typeface
- Use DaisyUI component classes for consistent UI patterns

**Asset Handling**:

- Logo assets in `/public/` (e.g., `/hpz-logo-black.png`)
- Component assets in `src/assets/`
- Reference public assets with leading slash in src attributes

## Component Patterns

**Navbar Example**: Uses motion for logo animation, responsive mobile menu with hamburger, sticky positioning with shadow. Import and use in page components, not directly in App.

**State Management**: Standard React hooks (`useState`) for component-level state. No external state management library currently used.

**Styling Approach**: Tailwind utility classes with responsive prefixes, DaisyUI component classes when available, custom CSS properties in index.css for global styles.
