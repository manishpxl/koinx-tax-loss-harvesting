# KoinX Tax Loss Harvesting Dashboard

A responsive React + Vite + Tailwind CSS dashboard built for the **KoinX Frontend Intern Assignment**. It helps users simulate tax loss harvesting by selecting holdings and instantly seeing the impact on their effective capital gains.

## Overview

This project demonstrates a tax harvesting workflow where a user can:

- View capital gains before harvesting
- Select assets from holdings
- Instantly view updated gains after harvesting
- Search holdings by asset name or symbol
- Sort holdings by STCG and LTCG
- Expand from default visible rows to the full list
- Review disclaimers and guidance before making decisions

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript (JSX)

## Folder Structure

```txt
koinx-tax-harvesting/
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── data/
│   ├── features/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features Implemented

### Core Features

- Mock API based capital gains data loading
- Mock API based holdings data loading
- Before Harvesting summary card
- After Harvesting summary card
- Loss harvesting impact calculation
- Holdings table with checkbox selection
- Amount to Sell auto-display after row selection
- “How it works?” helper tooltip
- Disclaimer accordion section
- Loader state
- Error state
- Empty state

### Bonus Features

- Search holdings by coin name / symbol
- Sort by STCG
- Sort by LTCG
- Default limited rows with “View All Holdings”
- Selected count and clear selection action
- Responsive layout for desktop and smaller screens

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd koinx-tax-harvesting
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## How the Logic Works

- Capital gains are loaded from a mocked API source.
- Holdings are loaded from a mocked API source.
- When a user selects a holding, that asset’s STCG and LTCG values are included in the harvesting impact calculation.
- Positive gains increase profits.
- Negative gains increase losses harvested.
- The “After Harvesting” card updates automatically based on the currently selected rows.
- Effective capital gains are recalculated live.
- A savings banner is shown only when post-harvesting effective capital gains are lower than pre-harvesting gains.

## UI / UX Notes

- Dark dashboard theme for polished presentation
- Reusable common components for maintainability
- Feature-based structure for scalability
- Search, sort, and selection designed for quick experimentation

## Assumptions

- This project is a frontend-only mocked implementation.
- No real trade is executed.
- No backend persistence is used.
- Tax rules may vary by jurisdiction, so this is for interface simulation only.

## Future Improvements

- Add unit tests for calculations and selectors
- Add row-level sell quantity editing
- Add advanced filtering for profitable / loss-making assets
- Add real API integration
- Add mobile-optimized card layout for holdings

## Author

Built by [Manish Kumar](https://manish-kumar-portfolio-website.netlify.app/)  
Software Engineer | MERN Stack Developer