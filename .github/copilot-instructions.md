<!-- Copilot / agent guidance for the bg repo -->
# Copilot Instructions

Purpose: give an AI coding agent the minimum, actionable knowledge to be productive in this repository.

1) Big picture
- Monorepo-like single project split into two runtime halves: the browser client and an Express + tRPC server.
- Client lives under `client/` (Vite + React + TanStack Query + tRPC). Server lives under `server/` (Express, tRPC adapters, OAuth, Drizzle ORM).
- Dev flow: run the single `pnpm dev` script from the repo root — it launches the server entry `server/_core/index.ts`, which in turn mounts Vite middleware for the client (so you do not run the client separately).

Key files:
- [server/_core/index.ts](server/_core/index.ts) — server entry; mounts tRPC and Vite dev middleware.
- [server/_core/vite.ts](server/_core/vite.ts) — Vite integration for dev, and `serveStatic` for production.
- [server/routers.ts](server/routers.ts) — top-level tRPC router; follow this file to add API methods.
- [server/_core/trpc.ts](server/_core/trpc.ts) — tRPC init, `publicProcedure`, `protectedProcedure`, `adminProcedure` patterns.
- [client/src/main.tsx](client/src/main.tsx) — tRPC client wiring and global error handling (redirects to login on UNAUTHED errors).
- [server/db.ts](server/db.ts) and [drizzle/schema.ts](drizzle/schema.ts) — database access patterns; DB connection is lazily created.

2) How to run (essential commands)
- Install: `pnpm install` (pnpm is the canonical package manager; `packageManager` is set in package.json).
- Development (single command): `pnpm dev` — runs `tsx watch server/_core/index.ts`. The server will start and Vite middleware will serve the client.
- Build production bundle: `pnpm build` — runs `vite build` for client and `esbuild` to bundle `server/_core/index.ts` into `dist`.
- Start production: `pnpm start` (expects built `dist/index.js`).
- Typecheck: `pnpm check` (runs `tsc --noEmit`).
- Tests: `pnpm test` (runs `vitest run`).
- DB migrations: `pnpm db:push` (runs drizzle-kit generate + migrate). See `drizzle/` for schema and migrations.

3) Architectural/convention notes an agent must respect
- All HTTP API endpoints should live under `/api/` — tRPC is mounted at `/api/trpc` in [server/_core/index.ts](server/_core/index.ts). Keep this prefix when adding new server routes.
- Use tRPC procedures: `publicProcedure` for open APIs, `protectedProcedure` for authenticated users (see `protectedProcedure` in [server/_core/trpc.ts](server/_core/trpc.ts)), and `adminProcedure` for admin-only routes.
- The server uses `superjson` as the serializer on both client and server. Keep that consistent when changing transports.
- Authentication uses cookies; cookie helpers live under [server/_core/cookies.ts](server/_core/cookies.ts). Use `COOKIE_NAME` from [shared/const.ts](shared/const.ts) when manipulating session cookies.
- Database access: call `getDb()` from [server/db.ts](server/db.ts) and avoid assuming the DB is always present (the code guards for absent DB in local dev).

4) Environment & runtime
- Environment variables are loaded via `dotenv` in the server entry. Common spots reading env: `server/_core/env.ts` and `server/_core/index.ts`.
- Default dev port is 3000 (the server attempts to find a free port if 3000 is busy).

5) Tests & debugging
- Unit tests: `pnpm test` (vitest). Use `pnpm check` for TypeScript-only issues.
- Runtime debugging: run `pnpm dev` and inspect server logs; Vite middleware prints client build errors to the terminal and sends transformed index.html via [server/_core/vite.ts](server/_core/vite.ts).

6) Patterns and examples
- Add a tRPC endpoint: update [server/routers.ts](server/routers.ts) with `router({ myRoute: publicProcedure.input(...).query/ mutation(...) })`.
- Example: client uses `trpc.createClient({ links: [httpBatchLink({ url: '/api/trpc' })] })` in [client/src/main.tsx](client/src/main.tsx).
- When adding file upload or large JSON payloads, note server body-parser limits are increased in [server/_core/index.ts](server/_core/index.ts) to `50mb`.

7) Notable repo quirks
- Single-command dev environment: the server spawns Vite middleware for the client — do not run a separate `vite` dev server unless experimenting.
- A patched dependency is applied via `patches/` for `wouter@3.7.1`. Do not remove that patch without confirming why it was added.

8) Where to look when things fail
- Server errors and routing: [server/_core/index.ts](server/_core/index.ts) and [server/_core/vite.ts](server/_core/vite.ts).
- API and auth behavior: [server/routers.ts](server/routers.ts), [server/_core/trpc.ts](server/_core/trpc.ts), [server/_core/cookies.ts](server/_core/cookies.ts).
- DB issues: [server/db.ts](server/db.ts) and `drizzle/` directory.

If anything here is unclear or you want this expanded (examples, code snippets, or more files linked), tell me which parts to iterate on.
