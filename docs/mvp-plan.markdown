# MVP Plan for Hicivi.com

This document outlines the plan to develop the Minimum Viable Product (MVP) for Hicivi.com, a SaaS platform for HR CV management with multi-tenancy and AI-powered screening. The plan follows a **hybrid approach**: designing a preliminary database schema to ensure data integrity and multi-tenancy, while prototyping business logic to validate core features quickly. The MVP targets a 3-6 month timeline with a team of 3-5 developers, delivering core functionality for in-house and agency recruiters.

## Project Scope

- **Core Features** (from `features.md`):
  - Job creation and public CV submission.
  - AI-powered CV parsing and JD matching (basic OCR/NLP).
  - Multi-stage CV processing (Pending, In Review, Passed, Rejected, Onboarded).
  - Multi-tenancy with tenant isolation (internal/agency modes).
  - Basic tenant dashboard (job/CV stats).
  - Basic super admin dashboard (tenant management, system config).
- **Out of Scope for MVP**:
  - Advanced AI (e.g., deep learning for skill extraction).
  - Branded reports (PDF/CSV exports).
  - HR performance metrics (post-MVP).
  - Client management for agency mode (post-MVP).
  - Billing system (use freemium model with manual tracking).

## Timeline and Phases

Total timeline: **4 months** (16 weeks), assuming a team of 3-5 developers working full-time. Budget estimate: ~$200-500/month for cloud (AWS free tier, PostgreSQL, S3).

### Phase 1: Setup and Preliminary Design (Weeks 1-2)

**Objective**: Set up infrastructure, design core database schema, and define API specs.

- **Tasks**:
  - **Infra Setup**:
    - Initialize monorepo with TurboRepo/Yarn Workspaces (file `project-structure.md`).
    - Set up Next.js (`frontend`, `frontend-admin`), Node.js/Express (`backend`), PostgreSQL (`db`), AWS S3.
    - Configure GitHub Actions for CI/CD (file `tech-stack.md`).
  - **Database Design**:
    - Implement core schema: `tenants`, `users`, `jobs`, `cvs` (file `er-diagram.mmd`).
    - Add indexes: `tenant_id`, `job_id`.
    - Use JSONB for `candidate_info`, `files` in `cvs` table for AI data.
  - **API Specs**:
    - Define core endpoints: `POST /tenants`, `POST /[tenantId]/jobs`, `POST /jobs/[jobId]/submit`, `GET /[tenantId]/cvs` (file `api-specs.json`).
  - **Deliverables**:
    - Monorepo setup with `frontend`, `frontend-admin`, `backend`, `shared` packages.
    - PostgreSQL schema deployed (core tables).
    - Initial API specs in Swagger (file `api-specs.json`).
- **Team Allocation**: 1 backend dev (schema, infra), 1 frontend dev (Next.js setup), 1 dev for CI/CD.

### Phase 2: Core Feature Prototype (Weeks 3-8)

**Objective**: Build and test core features (job creation, CV submission, AI screening, dashboard).

- **Tasks**:
  - **Backend**:
    - Implement core APIs:
      - `POST /tenants`: Create tenant with slug.
      - `POST /[tenantId]/jobs`: Create job, generate public form URL.
      - `POST /jobs/[jobId]/submit`: Public CV submission (store in S3, insert into `cvs`).
      - `GET /[tenantId]/cvs`: List CVs with filters (status, jobId).
    - Integrate basic AI: Tesseract.js for OCR, Hugging Face (BERT) for keyword-based JD matching (store `ai_score`).
    - Set up auth: JWT for tenant users, role checks (`admin`, `editor`, `viewer`) (file `tech-stack.md`).
  - **Frontend**:
    - Build core pages (file `ui-mockups.md`):
      - `/signup`, `/login`: Tenant registration/login.
      - `/[tenantId]/dashboard`: Job/CV stats (cards, pie chart).
      - `/jobs/[jobId]/form`: Public CV submission form.
      - `/[tenantId]/jobs`, `/[tenantId]/jobs/[jobId]`: Job list and details.
      - `/[tenantId]/cvs/[cvId]`: CV details with basic timeline.
    - Use Material-UI for consistent UI, Chart.js for dashboard visuals.
  - **AI Integration**:
    - Prototype OCR to extract name, email, skills from CVs.
    - Basic JD-CV matching (keyword-based, e.g., "React" in JD matches CV).
  - **Deliverables**:
    - Working APIs for job creation, CV submission, CV listing.
    - Functional tenant dashboard and public CV form.
    - Basic AI pipeline (mock output: `{ "name": "John", "skills": ["React"] }`).
- **Team Allocation**: 2 backend devs (API, AI), 2 frontend devs (UI), 1 dev for testing.

### Phase 3: Super Admin and Automation (Weeks 9-12)

**Objective**: Add super admin functionality and automation for CV processing.

- **Tasks**:
  - **Backend**:
    - Implement super admin APIs:
      - `GET /super-admin/tenants`: List tenants.
      - `POST /super-admin/tenants`: Create tenant manually.
      - `PUT /super-admin/config`: Set global config (e.g., `cv_expire_weeks: 3`).
    - Add automation: Auto-reject CVs after 3 weeks (BullMQ job queue).
    - Integrate Nodemailer for email notifications (e.g., CV submitted).
  - **Frontend**:
    - Build super admin pages (file `ui-mockups.md`):
      - `/super-admin/login`: Secure login with 2FA.
      - `/super-admin/dashboard`: System stats (tenants, jobs, CVs).
      - `/super-admin/tenants`: Tenant management.
      - `/super-admin/config`: System config form.
    - Use dark/red theme for `frontend-admin` to distinguish from tenant pages.
  - **Deliverables**:
    - Super admin dashboard and tenant management UI.
    - Automation for CV expiry (3 weeks).
    - Email notifications for CV submission/status changes.
- **Team Allocation**: 1 backend dev (super admin APIs, automation), 1 frontend dev (super admin UI), 1 dev for testing.

### Phase 4: Testing, Polish, and Deployment (Weeks 13-16)

**Objective**: Test, optimize, and deploy MVP.

- **Tasks**:
  - **Testing**:
    - Unit tests for APIs (Jest, Supertest).
    - Integration tests for CV submission → AI scoring → notification flow.
    - UI tests (Cypress) for `/signup`, `/[tenantId]/dashboard`, `/jobs/[jobId]/form`.
    - Load test: Simulate 1k CV submissions (Locust).
  - **Optimization**:
    - Add indexes for `cvs` queries (e.g., `tenant_id`, `job_id`).
    - Cache dashboard stats (Redis, post-MVP).
  - **Deployment**:
    - Deploy to AWS (ECS for backend, Vercel for frontend).
    - Set up monitoring (Prometheus/Grafana, Sentry).
  - **Deliverables**:
    - Tested MVP with core features (job creation, CV submission, AI scoring, tenant dashboard, super admin).
    - Deployed app on `hicivi.com` and `admin.hicivi.com`.
    - Documentation: Setup guide, API usage (file `api-specs.json`).
- **Team Allocation**: 1 backend dev (optimization, deployment), 1 frontend dev (polish), 1-2 devs for testing.

## Key Deliverables

- **Core Features**:
  - Tenant signup/login, job creation, public CV submission form.
  - Tenant dashboard with job/CV stats (file `ui-mockups.md`).
  - Basic AI CV scoring (keyword-based).
  - Super admin dashboard for tenant management (file `ui-mockups.md`).
- **Technical Artifacts**:
  - Database schema (file `er-diagram.mmd`).
  - APIs (file `api-specs.json`).
  - Monorepo setup (file `project-structure.md`).
- **Deployment**: Live app with freemium model (5 free onboarded CVs).

## Risks and Mitigations

- **Risk**: AI integration delays (e.g., Tesseract.js accuracy low).
  - **Mitigation**: Use mock AI output for MVP, refine post-launch.
- **Risk**: Database performance issues with 10k CVs/month.
  - **Mitigation**: Add indexes early, plan for Redis caching.
- **Risk**: Timeline overrun with small team.
  - **Mitigation**: Prioritize core features, defer HR metrics and reports.

## Next Steps Post-MVP

- Add agency mode (client management, branded reports).
- Enhance AI (BERT fine-tuning, multi-language support).
- Implement HR performance metrics (file `features.md`).
- Build billing system (file `ui-mockups.md`).
