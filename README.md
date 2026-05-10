🚀 LENDSQR FRONTEND ASSESSMENT – Simisola Olubodun

📌 PROJECT OVERVIEW

This project is a frontend-only implementation of a fintech-style user management dashboard, built as part of the Lendsqr engineering assessment.
It simulates a real-world administrative system where operators can:

View a list of users in a structured dashboard
Inspect detailed user profiles
Navigate between users seamlessly
Interact with paginated and filterable datasets

The focus of this implementation is not just UI rendering, but clean architecture, scalable component design, type safety, and realistic frontend data flow simulation.


🧠 TECHNICAL PHILOSOPHY

This project was built with the mindset of a production-grade internal dashboard, emphasizing:

Separation of concerns between UI, logic, and data layers
Reusable and composable UI components
Predictable data flow using a service abstraction layer
Strict TypeScript typing for data integrity
Testability of each UI and logic unit


⚙️ TECH STACK

React (Vite) – Fast development + optimized build system
TypeScript – Strict type safety and scalable code structure
SCSS – Modular and maintainable styling system
React Router – Client-side navigation and routing
Vitest + React Testing Library – Unit and component testing
Mock API Layer – Simulated backend data source


🏗️ ARCHITECTURE OVERVIEW

The project follows a feature-based modular architecture, designed for scalability and maintainability:

src/
 ├── components/   → Reusable UI building blocks (tables, badges, pagination)
 ├── pages/        → Application screens (Users, UserDetails, Login)
 ├── services/     → Data access layer (API abstraction)
 ├── mock/         → Simulated backend dataset
 ├── routes/       → Centralized routing configuration
 ├── layouts/      → Shared layout structures (dashboard shell)
 ├── styles/       → Global SCSS and shared design system
 ├── types/        → TypeScript interfaces and domain models


🔄 DATA FLOW DESIGN

The application follows a clean unidirectional data flow:

Mock dataset layer
Simulates backend API responses
Provides structured user data
Service layer abstraction
Handles data retrieval logic
Decouples UI from data source implementation
Page layer
Consumes service layer outputs
Manages page-level state and logic
Component layer
Pure UI rendering based on props
Fully reusable and stateless where possible

This ensures the system can easily evolve from mock data → real API integration without structural changes.


✨ CORE FEATURES

📊 User Dashboard:
Paginated tabular view of users
Structured data presentation with consistent UI components

👤 User Details Page:
Full profile breakdown (personal, education, socials, guarantor)
Persistent state via localStorage simulation

🧩 Reusable Component System:
Status badges
Pagination controls
Table abstractions
Action menus

🔁 Routing System:
Seamless navigation between dashboard and user detail views
🧪 Mock Backend Simulation
Realistic API-like structure using local datasets
📱 Responsive Layout
Adaptive UI for different screen sizes

🧪 TESTING STRATEGY
Testing is designed to validate behavior, not just rendering.

Coverage Areas:
✅ Data integrity (mock dataset consistency)
✅ Component rendering correctness
✅ UI state variations (loading, empty states)
✅ Page-level behavior (Users, UserDetails)
✅ Interaction flows (navigation, pagination)

Approach:
Unit tests built with Vitest
Component testing using React Testing Library
Mocked data and navigation to isolate behavior
Focus on real user interaction patterns rather than implementation details



🚀 HOW TO RUN THIS PROJECT

1. Install dependencies
npm install
2. Start development server
npm run dev
3. Run tests
npm run test


📌 PROJECT HIGHLIGHTS

Clean separation between UI, logic, and data layers
Scalable and maintainable folder structure
Realistic mock backend architecture
Strong TypeScript enforcement across the entire app
Component-driven design system
Fully test-covered core features
Built with future API integration in mind if needed (zero structural refactor needed)

🧠 FINAL NOTE

This implementation is designed to demonstrate:

understanding of real-world frontend architecture
ability to structure scalable React applications
awareness of test-driven development
production-level thinking beyond UI implementation