// about.jsx - About page demo
import { useStore } from "../core/index.js";

export function renderAbout() {
  const { theme } = useStore.getState();

  return (
    <div class={`min-h-screen bg-gradient-to-br ${theme === 'dark' ? 'from-purple-900 via-blue-900 to-indigo-900' : 'from-purple-50 via-blue-50 to-indigo-50'}`}>
      <div class="container mx-auto px-4 py-16">
        <div class="text-center mb-16">
          <div class="inline-block p-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-full mb-8">
            <span class="text-6xl">ℹ️</span>
          </div>
          <h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            About FeatherJS
          </h1>
          <p class="text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed">
            Learn more about this lightweight JavaScript framework for modern web applications.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 class="text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}">
                🚀 Features
              </h2>
              <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                <li class="flex items-center">
                  <span class="text-green-500 mr-3">✓</span>
                  Custom JSX Implementation
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-3">✓</span>
                  Client-side Routing
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-3">✓</span>
                  Zustand State Management
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-3">✓</span>
                  Tailwind CSS Ready
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-3">✓</span>
                  Zero Configuration
                </li>
              </ul>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 class="text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}">
                🎯 Why FeatherJS?
              </h2>
              <div class="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  <strong>Lightweight:</strong> Minimal bundle size without sacrificing features.
                </p>
                <p>
                  <strong>Modern:</strong> JSX support with familiar React-like syntax.
                </p>
                <p>
                  <strong>Flexible:</strong> Build what you need, when you need it.
                </p>
                <p>
                  <strong>Fast:</strong> Optimized build process with Vite.
                </p>
              </div>
            </div>
          </div>

          <div class="mt-8 text-center">
            <a
              href="/"
              data-link
              class="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              ← Back to Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}