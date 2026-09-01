# Katalysa Parent Dashboard

A responsive Parent Dashboard for Katalysa, a school management platform built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Approach

This dashboard is structured as a clean, maintainable Next.js application following these principles:

### Architecture

- **App Router**: Uses Next.js App Router for file-based routing
- **Component-Based Architecture**: Components are organized by feature domain (student, fees, results, common, layout)
- **Service Layer**: API calls are abstracted into service modules, making it easy to swap mock data for real endpoints
- **State Management**: Zustand is used for global state management with a single store for the dashboard
- **Custom Hook**: `useParentDashboard` encapsulates the dashboard's data fetching logic and state

### File Structure

```
app/              - Next.js pages and layouts
components/       - Reusable UI components organized by domain
  common/         - Generic components (Card, Badge, Button, etc.)
  layout/         - Layout components (Header, Container)
  student/        - Student-related components
  fees/           - Fee-related components
  results/        - Results-related components
services/         - API service layer
store/            - Zustand state management
hooks/            - Custom React hooks
types/            - TypeScript type definitions
mock/             - Mock data for development
utils/            - Utility functions
```

### Key Features

1. **Student Selector**: Tab-based child selector with status badges
2. **Fee Summary**: Displays total fees, amount paid, outstanding balance, and payment status
3. **Results Table**: Shows subject results with CA1, CA2, exam scores, totals, percentages, grades, and remarks
4. **Summary Cards**: Overall average and class position
5. **State Handling**: Loading, empty, error, and success states for all async operations
6. **Responsive Design**: Optimized for mobile screens (375px+) with horizontal scroll for selectors and tables

### API Integration

The service layer (`services/`) is designed with a `USE_MOCK` flag. When set to `true`, it returns mock data with simulated delays. When set to `false`, it makes real API calls using Axios. This makes it trivial to switch to a real backend.

### State Management

Zustand was chosen for its simplicity and minimal boilerplate. The store manages:
- Parent data
- Student list
- Selected student
- Fee and result data for the selected student
- Loading and error states for each async operation

### Responsive Design

- Mobile-first approach with responsive breakpoints
- Horizontal scroll for student selector on small screens
- Overflow-x scroll for results table on mobile
- Appropriate padding and font sizes for different screen sizes

## Getting Started

```bash
npm install
npm run dev
```

## Technologies

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Zustand (state management)
- Axios (HTTP client)
