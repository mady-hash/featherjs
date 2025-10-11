// main.js - Demo app entry point
import "./core/style.css";
import { router, useStore } from "./core/index.js";
import { renderDemo } from "./demo/demo.jsx";
import { renderAbout } from "./demo/about.jsx";

// Define demo routes
router.addRoute("/", renderDemo);
router.addRoute("/about", renderAbout);

// 404 route
const renderNotFound = () => `
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
      <a href="/" data-link class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Go Home
      </a>
    </div>
  </div>
`;

router.addRoute("/404", renderNotFound);

// Initialize app
function init() {
  // Apply saved theme
  const { theme } = useStore.getState();
  document.documentElement.classList.toggle("dark", theme === "dark");

  router.handleRoute(window.location.pathname);
}

// Start the application
document.addEventListener("DOMContentLoaded", () => {
  init();
});