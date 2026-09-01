# Katalysa — Parent Dashboard

A responsive Parent Dashboard for Katalysa, a school management platform. This project was built as part of a frontend technical assessment.

## Tech Stack Used

- **Next.js (App Router)** — for routing and page structure
- **TypeScript** — strict typing across all files
- **Tailwind CSS** — all styling done with utility classes
- **Axios** — HTTP client for API calls
- **Zustand** — lightweight state management

## Project Structure

```
katalysa-parent-dashboard/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main dashboard page
│   ├── globals.css         # Global styles and responsive resets
│   └── loading.tsx         # Full-page loading state
├── components/
│   ├── common/             # Reusable UI: Card, Badge, Button, Loading, ErrorState, EmptyState, SectionTitle
│   ├── layout/             # Header, Container
│   ├── student/            # StudentSelector, StudentCard, StudentStatus
│   ├── fees/               # FeeSummary, FeeCard, PaymentStatus
│   └── results/            # ResultsTable, ResultRow, SummaryCard
├── services/
│   ├── api.ts              # Axios instance with base URL and auth interceptor
│   ├── parent.service.ts   # Parent and student API calls
│   ├── fee.service.ts      # Fee API calls
│   └── result.service.ts   # Result API calls
├── store/
│   └── parentStore.ts      # Zustand store for all dashboard state
├── hooks/
│   └── useParentDashboard.ts  # Custom hook that wires up the store
├── types/
│   ├── parent.ts, student.ts, fee.ts, result.ts
├── mock/
│   └── data.ts             # Mock data for all endpoints
└── utils/
    ├── formatCurrency.ts   # Naira formatting (₦55,000)
    └── calculateGrade.ts   # Grade calculation and color mapping
```

## Approach

### How I Structured the Project

I separated concerns into layers:

1. **Types** define the data shapes
2. **Mock data** simulates API responses
3. **Services** handle API communication with a `USE_MOCK` toggle
4. **Store** (Zustand) manages all state — parent, students, fees, results, loading, and errors
5. **Custom hook** (`useParentDashboard`) connects the store to the page
6. **Components** are purely presentational, receiving data via props

This means if the backend API is ready, I just flip `USE_MOCK` to `false` in each service file and set `NEXT_PUBLIC_API_URL`.

### How I Handled Each Feature

**1. View Children**
- Parent name shows in the sticky Header
- Children are rendered in `StudentSelector` as cards that scroll horizontally on mobile
- Each `StudentCard` shows name, class, and a status badge

**2. Fee Summary**
- When a child is selected, `FeeSummary` fetches and displays: Total Fees, Amount Paid, Outstanding Balance
- Payment status shows as a colored badge (Paid/Partial/Unpaid)
- Currency is formatted in Naira (₦)

**3. Results**
- `ResultsTable` shows a full table: Subject, CA1, CA2, Exam, Total, Percentage, Grade, Remark
- Two summary cards show overall average and class position
- Grades are color-coded (A=green, B=blue, C=yellow, etc.)

### States I Implemented

Every async section (fees, results) independently handles:

- **Loading** — spinner animation while data fetches
- **Empty** — message when no data exists
- **Error** — error message with retry option
- **Success** — normal data display

The page itself also has loading, error, and empty states for when parent data or students fail to load.

### Responsive Design Decisions

- **375px target**: Many users will access from basic Android phones
- Student selector scrolls horizontally on small screens instead of stacking
- Results table scrolls horizontally with `overflow-x-auto` on mobile
- Remark column is hidden below `sm` breakpoint to save space
- Font size set to 16px on inputs to prevent iOS auto-zoom
- Tap highlight color removed for cleaner mobile interaction
- Padding and gaps are smaller on mobile, larger on desktop

## Assumptions

1. **Mock data is sufficient** — Since I don't have access to the real API, I created mock data that mirrors realistic Nigerian school data (Naira currency, class names like JSS 2A, SS 1B)
2. **Single parent login** — The dashboard is hardcoded to parent ID `parent-001` for demo purposes. In production, the parent ID would come from authentication
3. **No authentication flow** — I built the Axios interceptor to handle tokens, but didn't implement a login page since it wasn't in scope
4. **Term/session are static** — Results show "First Term, 2025/2026" as the current term
5. **Grading follows Nigerian system** — A1 (75%+) is Excellent, B2 is Very Good, down to F9

## How to Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.


