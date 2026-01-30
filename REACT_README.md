# AEGIS - Quantum Digital Defense

A cinematic, high-performance cybersecurity website built with React, Three.js, GSAP, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server  
- **Three.js** - 3D graphics and animations
- **GSAP (ScrollTrigger)** - Scroll-based animations
- **Framer Motion** - UI animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install --legacy-peer-deps
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx              # Main app component
├── main.jsx            # React entry point
├── components/
│   └── CyberExperience.jsx  # Main 3D experience component
├── app/
│   └── globals.css     # Global styles
└── lib/
    └── utils.js        # Utility functions
```

## Features

- Immersive 3D background with Three.js security core visualization
- Scroll-synchronized animations using GSAP ScrollTrigger
- Futuristic cyber-themed UI with glass morphism effects
- Responsive design
- High-performance rendering

## Notes

This project has been converted from Next.js + TypeScript to pure React + JavaScript using Vite for better performance and simplicity.
