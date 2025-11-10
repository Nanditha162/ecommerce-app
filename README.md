# ecommerce-app
# Minimal E‑commerce Prototype

Short description
This is a minimal Next.js + TypeScript prototype demonstrating static product browsing, product detail pages, and basic cart management (add/remove/view). Data is static (JSON / in-code) — no external DB required. Intended as a small prototype you can extend.

Features
- Product listing from static data
- Product detail pages (dynamic route)
- Shopping cart with add / remove / view
- Global cart state via React Context (CartProvider + useCart hook)
- Minimal responsive styling

Tech stack
- Frontend: Next.js (React + TypeScript), React Router not required (Next.js routing used)
- State: React Context (CartContext) with a convenience hook `useCart`
- Backend: none — static data
- Tooling: Node.js, npm, ESLint, TypeScript
- Platform: development container (Ubuntu 24.04.2 LTS)

Technical architecture notes
- Pages
  - src/pages/index.tsx — home / product listing
  - src/pages/product/[id].tsx — product detail page (dynamic route)
- Components
  - src/components/ProductList.tsx — renders an array of Product items (safe default to empty array)
  - src/components/ProductCard.tsx — individual product preview and "Add to cart"
  - src/components/CartDrawer.tsx — cart UI that consumes CartContext
- Context
  - src/context/CartContext.tsx — exports `CartContext`, `CartProvider`, and a hook `useCart()` for typed access. Components should import the hook:
    - import { useCart } from '../context/CartContext';
- Data
  - Static JSON or TS array in src/data or src/lib — used by pages at build/runtime
- Error handling / common issues
  - "Cannot read properties of undefined (reading 'map')" — ensure ProductList props default to [] or callers pass a product array.
  - "Module declares 'CartContext' locally, but it is not exported" — export CartContext and CartProvider from the context file.
  - "Export useCart doesn't exist" — add and export the `useCart` hook from CartContext if components import it.

Folder structure (important files)
- my-nextjs-ecommerce/
  - src/
    - pages/
      - index.tsx
      - product/[id].tsx
      - _app.tsx (wraps with CartProvider)
    - components/
      - ProductList.tsx
      - ProductCard.tsx
      - CartDrawer.tsx
    - context/
      - CartContext.tsx
    - styles/
      - globals.css
    - types/
      - index.ts
  - package.json
  - tsconfig.json
  - .eslintrc.json

Quickstart (local dev container)
1. Open terminal in project root:
   cd /workspaces/ecommerce-app/my-nextjs-ecommerce

2. Install:
   npm install

3. Run dev server:
   npm run dev

4. Open in host browser:
   $BROWSER http://localhost:3000

Build & Production
- Build:
  npm run build
- Start production server:
  npm start

Git & GitHub (example)
1. Initialize and commit:
   git init
   git add .
   git commit -m "Initial commit"

2. Create GitHub repo and push:
   git remote add origin https://github.com/<your-username>/<repo>.git
   git branch -M main
   git push -u origin main

Testing & Linting
- Lint:
  npm run lint
- Manual test flows:
  - Browse products
  - Open product details
  - Add product to cart, open cart, remove product

Troubleshooting tips
- If the page is blank or throws runtime errors:
  - Check terminal where `npm run dev` runs for server-side stack traces.
  - Check browser DevTools console for client errors.
  - Verify imports and exports in src/context/CartContext.tsx (must export CartProvider and useCart).
  - Ensure ProductList receives products or defaults to [].

Sample prompts / templates
Build a minimal e-commerce web application prototype with: Product browsing from a static list. Product detail view. Shopping cart with add/remove/view functionality. Tech Stack Frontend: React.js (or Next.js), React Router. Backend: Node.js with Express.js (optional, use static data if short on time). Database: Skip or use static JSON for product data. Versioning: Git and GitHub. Deliverables ... Rapid Execution and GitHub Steps"
"Build a React app for e-commerce product listing and cart management using static data, and push working code to a GitHub repository within 40 minutes."
"what is the next step after creating the workspace and how to test and run the created workspace"
"npm install" (error/diagnostic flow — ENOENT because wrong folder)
"ls -la" / "cd my-nextjs-ecommerce" / "npm install" / "npm run dev" (environment run commands)
"command to exit from terminal"
Error reports you posted as prompts:
"Cannot read properties of undefined (reading 'map') at ProductList (src/components/ProductList.tsx:12:17)"
"./src/components/CartDrawer.tsx:2:10 Type error: Module '../context/CartContext' declares 'CartContext' locally, but it is not exported."
"Export useCart doesn't exist in target module" (build error from ProductCard import)
Fix / instruction prompts you issued:
"what chages to r made to existing code" (after ProductList fix)
Requests to export CartContext/CartProvider and add a useCart hook
Documentation / README prompt:
"now provide the overview of this particular project to be mentioned in the GitHub readme file which should include the Technical architecture notes in the README. Sample prompts/templates for generating documentation or structure."
Meta / template prompts shown in README:
"
