# Vyral

## Monorepo structure

- `apps/web` - Next.js web application.
- `apps/worker` - Node.js HTTP worker service.
- `packages/shared` - Shared code and schemas.
- `packages/db` - Database package scaffold; Prisma will be added later.

Run commands from the repository root:

```powershell
pnpm --filter @vyral/web dev
pnpm --filter @vyral/worker dev
```

For production, build each app with `pnpm --filter @vyral/web build` or
`pnpm --filter @vyral/worker build`, then start it with the matching
`pnpm --filter @vyral/web start` or `pnpm --filter @vyral/worker start`.