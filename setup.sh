#!/bin/bash

echo "🚀 Setting up FeatherJS..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
echo "   (Includes Vite, Tailwind CSS, Zustand, and all necessary tools)"
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup complete!"
    echo ""
    echo "🚀 To start development:"
    echo "   npm run dev"
    echo ""
    echo "📖 To start building your own app:"
    echo "   1. Delete the src/demo/ folder"
    echo "   2. Create your own pages in src/pages/"
    echo "   3. Modify src/main.js to import your pages"
    echo ""
    echo "📚 Read the README.md for detailed instructions"
else
    echo "❌ Setup failed. Please check your Node.js and npm installation."
    exit 1
fi