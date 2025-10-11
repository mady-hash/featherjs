import { useStore } from "../core/index.js";

export function renderDemo() {
  const { theme, demoCount, incrementDemo, decrementDemo } =
    useStore.getState();

  return (
    <div
      class={`min-h-screen bg-gradient-to-br ${theme === "dark" ? "from-gray-900 via-gray-800 to-gray-900" : "from-blue-50 via-indigo-50 to-purple-50"}`}
    >
      <div class="container mx-auto px-4 py-16">
        <div class="text-center mb-16">
          <div class="inline-block p-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-full mb-8">
            <span class="text-6xl">🪶</span>
          </div>
          <h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            FeatherJS Demo
          </h1>
          <p
            class={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto leading-relaxed`}
          >
            Welcome to FeatherJS! This is a simple demo page. Delete this file
            and start building your own app.
          </p>
        </div>

        <div class="max-w-md mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <h2
              class={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              Interactive Demo
            </h2>

            <div class="text-6xl font-bold text-blue-600 mb-8">{demoCount}</div>

            <div class="flex gap-4 justify-center">
              <button
                onClick={decrementDemo}
                class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                - Decrease
              </button>
              <button
                onClick={incrementDemo}
                class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                + Increase
              </button>
            </div>

            <div class="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p class={`text-sm ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'} mb-4`}>
                <strong>🎯 Test the router:</strong>{" "}
                <a href="/about" data-link class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
                  Visit About Page
                </a>
              </p>
              <p class={`text-sm ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
                <strong>📝 Next steps:</strong> Delete <code>src/demo/</code>{" "}
                and create your own pages in <code>src/pages/</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

