# GSAT Timer

[![Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://lagee666.github.io/gsat-timer/)
[![Rust](https://img.shields.io/badge/Backend-Rust-black?logo=rust)](https://www.rust-lang.org/)
[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://reactjs.org/)

A modern, responsive countdown timer specifically designed for the **General Scholastic Ability Test (GSAT)**. It helps students track the remaining time until their exams with a clean and focused interface.

## Features

- **Real-time Countdown**: Accurate tracking of days, hours, minutes, and seconds.
- **Custom Date Selection**: Flexible date selection for different exam schedules.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Smooth Animations**: Powered by Framer Motion for a polished user experience.
- **Rust Backend**: A lightweight Axum-based server to serve the production build.

## Tech Stack

### Frontend
- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router DOM](https://reactrouter.com/)

### Backend
- **Language**: [Rust](https://www.rust-lang.org/)
- **Web Framework**: [Axum](https://github.com/tokio-rs/axum)
- **Runtime**: [Tokio](https://tokio.rs/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [Rust](https://www.rust-lang.org/tools/install) (for the backend server)

### Frontend Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

### Build & Serve

To build the project and serve it using the Rust backend:

1. **Build the frontend**:
   ```bash
   npm run build
   ```
   This generates the static files in the `dist/` directory.

2. **Run the Rust server**:
   ```bash
   cargo run
   ```
   The production server will start at `http://localhost:5000`.

## Project Structure

```text
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages (Home, Countdown)
│   ├── utils/           # Utility functions (calculateTimeLeft)
│   ├── main.jsx         # Frontend entry point
│   └── main.rs          # Backend server (Axum)
├── public/              # Static assets
├── index.html           # Main HTML template
└── Cargo.toml           # Rust dependencies
```

## License

MIT License. Feel free to use and modify!