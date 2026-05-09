PROJECT TITLE: Lendsqr Frontend Assessment – Simisola Olubodun

PROJECT OVERVIEW
This project is a frontend implementation of a user management dashboard built as part of the Lendsqr engineering assessment.
It simulates a fintech admin dashboard where administrators can view users, inspect user details, and manage user-related data through a structured interface.

TECH STACK
- React (Vite)
- TypeScript
- SCSS
- React Router
- Mock API (local data simulation)
- Contextual component-based architecture


ARCHITECTURE
The project follows a modular, feature-based architecture:

src/
 ├── components/   → Reusable UI components (tables, badges, pagination)
 ├── pages/        → Application screens (Users, UserDetails, Login)
 ├── services/     → Data fetching logic (mock API abstraction)
 ├── mock/         → Local dataset simulating backend API
 ├── routes/       → Application routing configuration
 ├── layouts/      → Shared page layouts (Dashboard structure)
 ├── styles/       → Global and shared styling system
 ├── types/        → TypeScript interfaces and models

 DATA FLOW
1. Mock API generates user dataset locally
2. Service layer abstracts data access
3. Pages consume service layer
4. Components render UI based on structured props

FEATURES
- Users dashboard with tabular data display
- Dynamic user details page
- Reusable UI components (Status badges, pagination, tables)
- Modular routing system
- Mock API simulating real backend behavior
- Fully responsive UI structure

TESTING STRATEGY 
Unit testing approach focuses on:

- Data integrity validation (mock users)
- Component rendering correctness
- Page-level behavior (Users, UserDetails)
- Positive and negative UI states (loading, empty, error)

🚀 HOW TO RUN PROJECT
npm install
npm run dev


📁 PROJECT HIGHLIGHTS
- Clean separation of concerns (UI / Data / Logic)
- Scalable folder structure
- Mock backend simulation for realistic frontend workflow
- Strong TypeScript type safety
