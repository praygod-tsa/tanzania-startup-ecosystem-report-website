# Tanzania Startup Ecosystem Status Report 2025/26 Website

A modern, responsive, policy-grade website for the Tanzania Startup Ecosystem Status Report 2025/26. The site is
built with React + Vite and translates the report content into an interactive, public-facing annual report platform
with stakeholder-specific pathways and subscription messaging.

## Features
- Structured report narrative: home, about, findings, subscription model, stakeholder value, methodology, history,
  partners, and get involved sections.
- Responsive layout with data visualization placeholders and comparison tables.
- Clean, accessible styling suitable for policymakers, investors, and research institutions.
- Multi-page routing with React Router for direct URL access to each section.

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Project Structure
```text
.
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── App.jsx
    ├── components
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   └── Layout.jsx
    ├── index.css
    ├── main.jsx
    └── pages
        ├── About.jsx
        ├── Findings.jsx
        ├── GetInvolved.jsx
        ├── History.jsx
        ├── Home.jsx
        ├── Methodology.jsx
        ├── Partners.jsx
        ├── Stakeholders.jsx
        └── Subscription.jsx
```

## Deployment
- The project builds to static assets in `dist/`.
- Deploy the contents of `dist/` to any static hosting provider (Netlify, Vercel, Cloudflare Pages, S3, etc.).

## Future Enhancements
- Integrate authenticated dashboards and role-based access for subscribers.
- Replace placeholder data with live datasets and interactive charts.
- Add a searchable data portal with download requests and DUA workflows.
- Implement multilingual support (Swahili and English).
- Add analytics for policy engagement and stakeholder usage.
