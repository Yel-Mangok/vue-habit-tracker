## HabitTracker (Smart Habit Tracker)

HabitTracker is a modern, high-performance Habit Tracking and Productivity
Analytics Dashboard built with Vue.js 3 and Vite. The application simulates a
professional SaaS-inspired platform where users can log habits, categorize them
by lifestyle domains, assign priority matrix tiers, and monitor real-time
execution success rates through fluid, data-driven visual interfaces.

This codebase serves as an intermediate educational resource designed to
demonstrate clean Single Page Application (SPA) architecture, centralized
reactive state management via composition patterns, client-side routing, and
complex responsive styling natively built with CSS Grid and Flexbox.

### Features

- Single Page Application **(SPA) Architecture:** Smooth, instantaneous page transitions driven by Vue Router.

- Centralized State Management: Implements a decoupled, reusable composition pattern `(useHabits)` to synchronize state flawlessly between view sheets and display blocks.

- **Real-time Analytics Engine:** Automated metric aggregation computing global execution percentages and success rates.

- **Dynamic Data Grouping:** Programmatic collection and grouping of dynamic data arrays filtered seamlessly into visual category metrics.

- **Advanced SVG Components:** Fully customized, responsive SVG Ring Progress Charts animating track offsets dynamically based on data state.

- **Priority & Domain Matrix:** Clean data parsing utilizing specialized CSS badges (`High`, `Medium`, `Low`) and custom tag styling for structured organization.

- **Interactive Form Handling:** Secured local reactive validation streams to catch, clean, and process user entries instantly.

### Architecture & Tech Stack

- **Core Framework:** Vue.js 3 (utilizing the highly performant <script setup> syntax)

- **Build Tooling:** Vite (configured for rapid Hot Module Replacement)

- **Navigation:** Vue Router 5+ (Client-side history-mode routing)

- **Styling Engine:** Isolated, component-scoped raw CSS layout sheets utilizing semantic variables, Flexbox systems, and CSS Grid view grids.
