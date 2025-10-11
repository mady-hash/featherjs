import { useStore } from "./store.js";

class Router {
  constructor() {
    this.routes = [];
    this.currentPath = "";

    window.addEventListener("popstate", () => {
      this.handleRoute(window.location.pathname);
    });

    document.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        this.navigate(e.target.href);
      }
    });
  }

  addRoute(path, component, defaultProps = {}) {
    this.routes.push({ path, component, defaultProps });
  }

  navigate(href) {
    const path = new URL(href).pathname;
    window.history.pushState({}, "", path);
    this.handleRoute(path);
  }

  handleRoute(path) {
    useStore.getState().setCurrentPath(path);
    const route = this.routes.find(r => this.matchRoute(r.path, path)) || this.routes.find(r => r.path === "/404");
    if (route) {
      this.currentPath = path;
      try {
        const params = this.extractParams(route.path, path);
        const props = { ...route.defaultProps, ...params };
        const result = route.component(props);

        // Handle both string (template literal) and DOM element (JSX) returns
        const app = document.getElementById("app");
        if (app) {
          if (typeof result === "string") {
            app.innerHTML = result;
          } else if (result instanceof Node) {
            app.innerHTML = "";
            app.appendChild(result);
          }

          // Attach events if the component has an attachEvents function
          if (route.component.attachEvents) {
            // Use setTimeout to ensure DOM is updated
            setTimeout(() => route.component.attachEvents(), 0);
          }
        }
      } catch (error) {
        console.error("Error rendering component:", error);
      }
    }
  }

  matchRoute(routePath, currentPath) {
    const regex = new RegExp('^' + routePath.replace(/:\w+/g, '([^/]+)') + '$');
    return regex.test(currentPath);
  }

  extractParams(routePath, currentPath) {
    const paramNames = (routePath.match(/:\w+/g) || []).map(p => p.slice(1));
    const regex = new RegExp('^' + routePath.replace(/:\w+/g, '([^/]+)') + '$');
    const matches = currentPath.match(regex);
    if (!matches) return {};
    const params = {};
    paramNames.forEach((name, index) => {
      params[name] = matches[index + 1];
    });
    return params;
  }

  update() {
    this.handleRoute(this.currentPath);
  }
}

export const router = new Router();
