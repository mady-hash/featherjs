// JSX helpers for custom framework
export function h(type, props, ...children) {
  // Handle functional components
  if (typeof type === "function") {
    return type({ ...props, children });
  }

  // Create DOM element
  const element = document.createElement(type);

  // Set properties
  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key === "children") return;

      if (key.startsWith("on") && typeof value === "function") {
        // Event handlers
        element.addEventListener(key.toLowerCase().slice(2), value);
      } else if (key === "class") {
        // Handle class attribute
        element.className = value;
      } else if (key === "style" && typeof value === "object") {
        // Handle style objects
        Object.assign(element.style, value);
      } else {
        // Regular attributes
        element.setAttribute(key, value);
      }
    });
  }

  // Append children
  children.flat().forEach((child) => {
    if (child == null || child === false) return;

    if (typeof child === "string" || typeof child === "number") {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    }
  });

  return element;
}

export function Fragment({ children }) {
  const fragment = document.createDocumentFragment();
  children.flat().forEach((child) => {
    if (child == null || child === false) return;

    if (typeof child === "string" || typeof child === "number") {
      fragment.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      fragment.appendChild(child);
    }
  });
  return fragment;
}

