# Profile Card Dashboard (React)

A simple React project built to demonstrate **component-based architecture** and **props-driven data flow**.

## What this project shows
- Reusable functional components
- One-way data flow using props
- Parent → child component communication
- Conditional rendering
- Rendering lists with keys
- Clean and scalable folder structure

## Tech Stack
- React (Vite)
- JavaScript (ES6+)

## Project Structure
src/
├─ components/
│ ├─ ProfileCard.jsx
│ ├─ SkillTag.jsx
│ └─ StatusBadge.jsx
├─ data/
│ └─ users.js
└─ App.jsx

## How it works
- `App` acts as the data owner
- User data is passed to `ProfileCard` via props
- `ProfileCard` delegates UI responsibility to smaller child components
- All components are stateless and reusable

## Getting Started
npm install
npm run dev
