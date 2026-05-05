# Instructions for AI Agents (AGENTS.md)

Welcome to the **Envios DosRuedas** project. This file provides essential information and guidelines for AI agents working on this codebase.

## 🚀 Project Overview
**Envios DosRuedas** is a modern logistics and delivery web application. It includes a public site for customers, an admin panel (`/admin`), and a delivery personnel portal (`/repartidor`).

## 🛠️ Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui, Framer Motion, Lucide React
- **AI Integration**: Google Genkit
- **Package Manager**: Bun (preferred)

## 📂 Project Structure
- `src/app/`: App Router routes (Admin, Repartidor, Public).
- `src/components/`: Reusable React components.
  - `ui/`: Base Shadcn/ui components.
  - `admin/` / `repartidor/`: Feature-specific components.
- `src/lib/`: Utility functions and Prisma client.
- `src/app/actions.ts`: Server Actions for data mutations.
- `prisma/`: Database schema and migrations/scripts.
- `public/`: Static assets.

## 📜 Coding Conventions & Best Practices
- **Tailwind CSS**: Always use the `cn()` utility for concatenating classes.
- **Color Tokens**: Use HSL tokens defined in `globals.css` (e.g., `bg-primary`, `text-secondary`). Do not hardcode hex/RGB values.
- **Typography**:
  - Headers: `Orbitron` (`font-orbitron`).
  - Body: `Roboto` (`font-roboto`).
- **Icons**: Use `lucide-react`.
- **Components**:
  - Implement `dark mode` support explicitly.
  - Use `framer-motion` for animations (follow the design principles in `DESIGN.md`).
- **Forms**: Use `react-hook-form` with `zod` for validation.
- **Server Actions**: Prefer Server Actions for data mutations.

## 🛠️ Development Workflow
- **Start Dev Server**: `bun dev`
- **Database Sync**: `bunx prisma db push`
- **Linting**: `bun run lint`
- **Type Checking**: `bun run typecheck`

## 🎨 Design Principles
1. **Efficiency Visual**: Quick access to tracking and pricing.
2. **Modernity**: Use glassmorphism (`backdrop-blur-sm`, `border-white/20`) and subtle gradients.
3. **Responsiveness**: Mobile-first approach is mandatory.
4. **Consistency**: Adhere strictly to the `DESIGN.md` guidelines.

## 🔐 Authentication (Dev/Internal)
The admin panel currently uses hardcoded credentials for development, which can be found in `src/app/admin/login/actions.ts`.

## ⚠️ Important Notes
- **Do not** introduce new UI libraries without prior approval.
- **Adhere** to the existing folder structure.
- **Verify** changes by running linting and type checks before submitting.
