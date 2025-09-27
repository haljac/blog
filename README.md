# Hall's Notes - Astro Blog

A minimalist blog built with Astro, featuring markdown content with frontmatter support.

## Features

- **Static Site Generation**: Fast, SEO-friendly static pages
- **Markdown Support**: Write content in markdown with frontmatter
- **Responsive Design**: Clean, mobile-friendly interface
- **Syntax Highlighting**: Built-in code highlighting
- **Content Collections**: Organized content management
- **Tailwind CSS**: Utility-first styling

## Getting Started

### Prerequisites

Make sure you have Node.js (version 18 or later) installed.

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── TopNav.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── notes/
│   │       ├── *.md
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       └── notes/
│           └── [slug].astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Content Management

Notes are stored in `src/content/notes/` as markdown files with frontmatter:

```markdown
---
title: "Your Note Title"
date: 2025-09-26
author: "Your Name"
excerpt: "A brief description of the note"
tags: ["tag1", "tag2"]
readTime: "5 min read"
---

Your note content goes here...
```

## Styling

The project uses Tailwind CSS with a custom typography plugin for markdown content styling. The design emphasizes:

- Clean, minimalist aesthetics
- Excellent readability
- Responsive layout
- Smooth transitions

## Deployment

This project generates static files that can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static file server

Simply run `npm run build` and deploy the `dist/` folder.
