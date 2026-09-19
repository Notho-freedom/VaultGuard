# VaultGuard

> A security-themed vault dashboard prototype with an unlock flow, vault inventory, alerts, password analysis, and settings.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material UI](https://img.shields.io/badge/MUI-7-007FFF?logo=mui&logoColor=white)](https://mui.com/)

## Overview

VaultGuard is a front-end security dashboard concept built around the idea of a protected digital vault.

The application is structured like a small desktop security console:

- unlock gate
- dashboard
- vault
- alerts
- password generator / analyzer
- settings
- status bar

The experience is designed to feel like an operational security tool rather than a generic CRUD dashboard.

## Main Areas

### Unlock

The application opens behind an unlock screen.

Once unlocked, the main shell becomes available and the dashboard can be accessed through the sidebar.

The prototype also includes a timed post-unlock Pro prompt to test the flow of secondary product messaging.

### Dashboard

The dashboard receives:

- a vault health score
- active alerts
- navigation callbacks

This makes it the central overview surface for the prototype.

### Vault

The vault page represents the main collection of protected entries.

The current implementation is powered by mock front-end data rather than a production credential store.

### Alerts

Alerts can be presented, reviewed, and marked as resolved inside the prototype.

The sidebar can also surface the number of unresolved critical alerts.

### Generator

The Generator screen includes a password-oriented analysis surface with:

- password input
- analysis action
- entropy / crack-time oriented presentation

It is currently a UI prototype and does not replace a dedicated, audited password-security library.

### Settings

The settings surface provides a place for security-console preferences and future configuration work.

## Data Flow

The main application shell keeps global navigation state locally:

\`\`\`text
isUnlocked
currentPage
showProPopup
\`\`\`

Mock data comes from the custom \`useMockData\` hook and feeds:

- vault entries
- alerts
- health score
- alert resolution

## Architecture

\`\`\`text
ThemeProvider
└── App Shell
    ├── TopBar
    ├── Sidebar
    ├── Active Page
    │   ├── Dashboard
    │   ├── Vault
    │   ├── Alerts
    │   ├── Generator
    │   └── Settings
    └── StatusBar
         +
      ProPopup
\`\`\`

Material UI provides the base component system and the application applies a custom dark theme on top.

## Tech Stack

- React
- TypeScript
- Vite
- Material UI
- Emotion
- Lucide React
- Custom dark theme

## Project Structure

\`\`\`text
src/
├── components/
│   ├── Sidebar
│   ├── TopBar
│   ├── StatusBar
│   └── ProPopup
├── hooks/
│   └── useMockData
├── pages/
│   ├── UnlockPage
│   ├── Dashboard
│   ├── Vault
│   ├── Alerts
│   ├── Generator
│   └── Settings
├── theme.ts
└── App.tsx
\`\`\`

## Getting Started

### Requirements

- Node.js 18+
- npm

### Install

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

### Build

\`\`\`bash
npm run build
\`\`\`

### Preview

\`\`\`bash
npm run preview
\`\`\`

### Lint

\`\`\`bash
npm run lint
\`\`\`

## Security Disclaimer

**VaultGuard is currently a UI prototype, not a production password manager or secure vault implementation.**

The repository uses mock data and front-end state. It does not currently provide a real secure storage layer, audited cryptography, credential synchronization, or hardened authentication infrastructure.

Do not store real passwords or secrets in this prototype.

## License

No explicit open-source license is currently defined in the repository.

---

A security-console concept focused on product structure, visual hierarchy, and interaction flow rather than production secret storage.