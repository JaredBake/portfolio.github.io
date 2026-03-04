# Portfolio (Angular)

This repository is set up as a fresh Angular portfolio project, connected to GitHub and prepared for MCP-based workflows with Angular, Vercel, and Supabase.

## Prerequisites

- Node.js `v20.19.0+` (current environment is compatible)
- npm
- VS Code

## Local setup

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## MCP configuration

MCP servers are configured in `.vscode/mcp.json`:

- `angular-cli` via `@angular/cli mcp`
- `vercel` via `https://mcp.vercel.com`
- `supabase` via `https://mcp.supabase.com/mcp?project_ref=${env:SUPABASE_PROJECT_REF}`

Set these environment variables in your shell or user environment before using Supabase MCP:

- `SUPABASE_PROJECT_REF`
- `SUPABASE_ACCESS_TOKEN`

Use `.env.example` as your variable checklist.

## Supabase app integration

- Runtime dependency installed: `@supabase/supabase-js`
- Client bootstrap: `src/app/core/supabase.client.ts`
- Environment placeholders:
	- `src/environments/environment.ts`
	- `src/environments/environment.development.ts`

Fill `supabaseUrl` and `supabaseAnonKey` before connecting app features.

## Vercel deployment

- Vercel CLI added as a dev dependency
- Deployment config in `vercel.json`

Typical flow:

```bash
npx vercel
```

## Build and test

```bash
npm run build
npm test
```

## GitHub

Remote is already connected to:

- `https://github.com/JaredBake/portfolio.git`
