@echo off
echo 🚀 Setting up FeatherJS...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo    Visit: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo 📦 Installing dependencies...
echo    (Includes Vite, Tailwind CSS, Zustand, and all necessary tools)
npm install

if %errorlevel% equ 0 (
    echo.
    echo ✅ Setup complete!
    echo.
    echo 🚀 To start development:
    echo    npm run dev
    echo.
    echo 📖 To start building your own app:
    echo    1. Delete the src\demo\ folder
    echo    2. Create your own pages in src\pages\
    echo    3. Modify src\main.js to import your pages
    echo.
    echo 📚 Read the README.md for detailed instructions
) else (
    echo ❌ Setup failed. Please check your Node.js and npm installation.
    pause
    exit /b 1
)

pause