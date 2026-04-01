# Incident Tracker App

**Live Demo:** https://bedofares.github.io/incident-tracker-app/

React Developer Technical Task for Genetec

---

## Project Idea

The application is designed as an **Incident Management / Incident Tracker system**.

It allows users to:

* View incidents in a structured way
* Track their status and timeline
* Filter and analyze incidents efficiently

---

## Tech Stack

* React
* TypeScript
* TailwindCSS
* PrimeReact (UI Library)

---

## UI Library Choice

I chose **PrimeReact** because it provides rich, production-ready components such as:

* DataTable (with built-in filtering, sorting, and pagination)
* Timeline component for visualizing incident history

This helped speed up development while still allowing flexibility and customization.

---

## Data Handling

* The application uses **mock data only**
* Random data is generated using a custom script
* Data is stored locally and managed within the application state

---

## State Management

I used React's built-in state management (`useState`, `useEffect`) because:

* The application scope is relatively small
* No need for complex global state management (e.g., Redux)
* Keeps the solution simple, maintainable, and easy to understand

State is shared between components to ensure consistency between the DataTable and Timeline views.

---

## Features

* **Search & Filtering**

  * Global search across incidents
  * Column-level filtering using PrimeReact DataTable
  * Column visibility toggle (show/hide columns dynamically)

* **Advanced Table**

  * Sorting and filtering per column
  * Clean and responsive UI using PrimeReact DataTable

* **Add New Incident**

  * Users can create new incidents
  * Newly added incidents are instantly reflected in:

    * The DataTable
    * The Timeline view

* **Loading & Error States**

  * Simulated loading indicators
  * Simulated error state handling for better UX demonstration

* **Timeline View**

  * Visual representation of incident history

* **Accessibility**

  * Timeline supports keyboard navigation
  * Improved usability and accessibility

---

## How to Run the Project

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to:

```
http://localhost:5173
```

---