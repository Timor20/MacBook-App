# MacBook App

A modern, interactive Apple MacBook landing page built with **Vite**, **React**, and **Tailwind CSS**, featuring fully interactive **3D MacBook models** rendered with **Three.js**, **@react-three/fiber**, and **@react-three/drei**. Smooth animations and transitions are powered by **GSAP**.

## 🚀 Features

* **Interactive 3D MacBook Model** using Three.js & React Three Fiber
* **Smooth GSAP Animations** for transitions, feature reveals, and model interactions
* **Responsive Layout** powered by `react-responsive`
* **State Management** with Zustand
* **Clean Utility CSS** using Tailwind
* **GLTF JSX** for structured and easy-to-read 3D component modeling
* **Vite Bundler** for fast development
* **Reusable UI Components** using `clsx` for conditional styling

## 🖥️ Tech Stack

* **Frontend:** React, JavaScript, HTML, CSS
* **Styling:** Tailwind CSS, clsx
* **3D & Animation:** Three.js, @react-three/fiber, @react-three/drei, GSAP, GLTF JSX
* **State Management:** Zustand
* **Build Tool:** Vite
* **Responsive Design:** react-responsive

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Timor20/MacBook-App.git
cd macbook-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎮 Interactivity

* Rotate, zoom, and inspect the MacBook model using Three.js orbit controls.
* GSAP powers **scroll-triggered animations**, **model transitions**, and **feature highlights**.
* 3D models are parsed through **GLTF JSX**, allowing declarative 3D components inside React.

## 📱 Responsive Design

Thanks to **react-responsive**, the layout adapts seamlessly across:

* Desktop
* Tablet
* Mobile

Animations and 3D interactions gracefully adjust to device capabilities.

## 🛠️ Scripts

```bash
npm run dev       # Start dev server
npm run build     # Create production build
npm run preview   # Preview production build
```

## 📜 License

MIT License © 2025
