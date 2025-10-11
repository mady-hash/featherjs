import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { router } from "./router.js";

export const useStore = createStore(
  persist(
    (set, get) => ({
      currentPath: "/",
      setCurrentPath: (path) => set({ currentPath: path }),
      theme: "light",
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        set({ theme: newTheme });
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      },
      demoCount: 0,
      demoTodos: ["Learn FeatherJS", "Build something cool"],
      incrementDemo: () => {
        set((state) => ({ demoCount: state.demoCount + 1 }));
        router.update();
      },
      decrementDemo: () => {
        set((state) => ({ demoCount: state.demoCount - 1 }));
        router.update();
      },
      addDemoTodo: (todo) => {
        set((state) => ({ demoTodos: [...state.demoTodos, todo] }));
        router.update();
      },
      removeDemoTodo: (index) => {
        set((state) => ({
          demoTodos: state.demoTodos.filter((_, i) => i !== index),
        }));
        router.update();
      },
    }),
    {
      name: "demo-store",
      partialize: (state) => ({
        theme: state.theme,
        demoCount: state.demoCount,
        demoTodos: state.demoTodos,
      }),
    },
  ),
);
