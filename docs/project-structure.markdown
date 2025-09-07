# Project Structure for Hicivi.com

Monorepo managed with TurboRepo/Yarn Workspaces for shared dependencies and build caching.

```
hicivi-project/
├── packages/
│   ├── web/              # Tenant-facing Next.js app
│   │   ├── src/
│   │   │   ├── components/   # UI components (e.g., CVTable.tsx)
│   │   │   ├── pages/[tenantId]/dashboard.tsx
│   │   │   ├── pages/[tenantId]/jobs/[jobId].tsx
│   │   │   ├── pages/jobs/[jobId]/form.tsx
│   │   │   ├── store/        # Zustand state management
│   │   │   ├── utils/        # API wrappers
│   │   │   └── styles/       # CSS/Theme
│   │   ├── public/           # Static assets
│   │   └── next.config.js
│   ├── admin/       # Super admin Next.js app
│   │   ├── src/
│   │   │   ├── pages/dashboard.tsx
│   │   │   ├── pages/tenants.tsx
│   │   │   ├── pages/config.tsx
│   │   │   ├── store/
│   │   │   └── utils/
│   │   ├── public/
│   │   └── next.config.js
│   ├── backend/              # Node.js/Express API
│   │   ├── src/
│   │   │   ├── controllers/  # API logic
│   │   │   ├── models/       # DB schemas
│   │   │   ├── routes/       # API routes
│   │   │   ├── services/     # Business logic (e.g., AIService.js)
│   │   │   └── middlewares/  # Auth, validation
│   │   ├── config/           # Env vars, DB connect
│   │   └── server.js
│   ├── shared/               # Shared components, types, utils
│   │   ├── components/Table.tsx
│   │   ├── utils/api.ts
│   │   ├── types/index.ts
├── docs/                     # API specs, diagrams
├── .github/workflows/        # CI/CD pipelines
├── docker-compose.yml        # Local dev setup
├── turbo.json                # TurboRepo config
└── package.json
```

**Why Separate admin?**

- **Security**: Isolates super admin pages (high privilege) from tenant pages, reducing data leakage risk.
- **Scalability**: Allows separate deployment (e.g., admin.hicivi.com).
- **Maintainability**: Clear separation of concerns (system-wide vs. tenant-specific).
