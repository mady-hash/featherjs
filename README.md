# [FeatherJS](https://featherjs.matteo.lt)

A lightweight JavaScript framework for building modern web applications with [custom routing](https://featherjs.matteo.lt), [state management](https://featherjs.matteo.lt), and [JSX support](https://featherjs.matteo.lt).

> **Note:** This is a downloadable package. If you're looking for the npm package, visit [npmjs.com/package/featherjs](https://www.npmjs.com/package/featherjs) (when available).

## Quick Start

### Option 1: Automated Setup (Recommended)

**Linux/Mac:**

```bash
./setup.sh
```

**Windows:**

```cmd
setup.bat
```

### Option 2: Manual Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

   > All necessary dependencies (Vite, Tailwind CSS, Zustand, etc.) are included.

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser** and visit `http://localhost:5174`

## Project Structure

```
src/
├── core/           # Framework core files
│   ├── index.js    # Main entry point
│   ├── router.js   # Client-side routing
│   ├── store.js    # Zustand state management
│   ├── jsx-helpers.js # JSX support
│   └── style.css   # Base styles
├── main.js         # App entry point (modify this)
├── demo/           # Simple demo (delete this)
│   └── demo.jsx    # Demo page component (JSX)
└── pages/          # Your app pages (create this)
    └── home.jsx    # Your first page (JSX)
```

## Getting Started with Your Own App

1. **Delete the demo files:**

   ```bash
   rm -rf src/demo/
   ```

2. **Create your pages directory:**

   ```bash
   mkdir src/pages
   ```

3. **Modify the main app file:**

   ```javascript
   // src/main.js (modify existing file)
   import "./core/style.css";
   import { router, useStore } from "./core/index.js";
   import { renderHome } from "./pages/home.jsx";

   // Define routes
   router.addRoute("/", renderHome);

   // 404 route (optional)
   const renderNotFound = () => `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
        <a href="/" data-link class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Go Home
        </a>
      </div>
    </div>
   `;
   router.addRoute("/404", renderNotFound);

   // Initialize app (keep this part)
   function init() {
     const { theme } = useStore.getState();
     document.documentElement.classList.toggle("dark", theme === "dark");
     router.handleRoute(window.location.pathname);
   }

   document.addEventListener("DOMContentLoaded", init);
   ```

4. **Create your first page:**

   ```jsx
   // src/pages/home.jsx
   import { useStore } from "../core/index.js";

   export function renderHome() {
     const { theme } = useStore.getState();

     return (
       <div
         class={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
       >
         <div class="container mx-auto px-4 py-16 text-center">
           <h1 class="text-4xl font-bold mb-4">Welcome to My App!</h1>
           <p class="text-lg">Built with FeatherJS</p>
         </div>
       </div>
     );
   }
   ```

5. **Update index.html title:**

   ```html
   <title>My FeatherJS App</title>
   ```

## [Features](https://featherjs.matteo.lt)

- **[Lightweight](https://featherjs.matteo.lt)**: Minimal bundle size, no bloat
- **[JSX Support](https://featherjs.matteo.lt)**: Write components with familiar JSX syntax
- **[Client-side Routing](https://featherjs.matteo.lt)**: Seamless navigation without page reloads
- **[State Management](https://featherjs.matteo.lt)**: Built-in Zustand store with localStorage persistence
- **[Theme Support](https://featherjs.matteo.lt)**: Automatic light/dark mode switching
- **[Styling Ready](https://featherjs.matteo.lt)**: Tailwind CSS pre-configured and ready to use
- **[Zero Config](https://featherjs.matteo.lt)**: Works out of the box with Vite

## [API Reference](https://featherjs.matteo.lt)

### [Router](https://featherjs.matteo.lt)

```javascript
import { router } from "featherjs";

// Add routes
router.addRoute("/", renderHome);
router.addRoute("/about", renderAbout);
router.addRoute("/user/:id", renderUser);

// Navigate programmatically
router.navigate("/about");
```

### [State Management](https://featherjs.matteo.lt)

```javascript
import { useStore } from "featherjs";

// Get state
const { theme, customData } = useStore.getState();

// Update state
useStore.getState().setTheme("dark");
useStore.getState().setCustomData(data);

// Subscribe to changes
useStore.subscribe((state) => {
  console.log("State changed:", state);
});
```

### [JSX Components](https://featherjs.matteo.lt)

```jsx
// component.jsx - No imports needed! JSX helpers are auto-injected
export const renderMyComponent = () => {
  const { theme, counter, incrementCounter } = useStore.getState();

  return (
    <div
      class={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
    >
      <h1 class="text-2xl font-bold mb-4">My Component</h1>
      <p class="mb-4">JSX is fully supported with automatic event handling!</p>

      <div class="flex items-center gap-4">
        <button
          onClick={incrementCounter}
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Count: {counter}
        </button>
      </div>
    </div>
  );
};
```

## [Build & Deploy](https://featherjs.matteo.lt)

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Deploy the `dist/` folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

