# Features of Hicivi.com

Hicivi.com is a SaaS platform designed to streamline CV management for HR professionals, supporting both in-house and agency recruiters. Below are the core features, optimized for efficiency, automation, and multi-tenancy.

## Job Management

- **Create Jobs**: HR creates jobs with detailed job descriptions (JD) via a form or file upload. Generates a public CV submission link (no login required).
- **List and Filter Jobs**: View all jobs per tenant or client (agency mode), with filters for status (Open, Closed, Draft) and deadline.

## CV Collection

- **Public Submission**: Candidates submit CVs (PDF/Word, <5MB, max 3 files) via job-specific public forms.
- **Manual Upload**: HR uploads CVs (max 50 at once, <100MB total) from external sources (e.g., email, LinkedIn). Auto-detects duplicates by email/phone.

## AI-Powered Screening

- **CV Parsing**: AI (OCR/NLP) extracts candidate info (name, email, skills, experience, education) and tags relevant data (e.g., "Senior Developer").
- **JD-CV Matching**: AI scores CVs (0-100%) based on JD match, highlights strengths/mismatches. Suggests top 10-20 CVs for shortlisting.

## CV Processing and Status

- **Multi-Stage Workflow**: Supports customizable hiring stages (e.g., Screening, Interview, Final). CVs have statuses: Pending, In Review, Passed, Rejected, Onboarded.
- **Automation**: Auto-rejects CVs after 3 weeks, sends email/SMS notifications (via Nodemailer/Twilio). HR can schedule interviews with Google Calendar/Outlook integration.

## CV Comparison

- **Side-by-Side Comparison**: Compare CVs against JD or each other, highlighting key attributes (skills, experience). Visualized in tables with match/mismatch indicators.
- **Scoring**: AI score (30% weight) and manual HR scores (70% weight, 0-100%) averaged for each stage.

## Timeline and Tracking

- **CV Timeline**: Tracks all actions (submission, scoring, status changes) with timestamps, HR comments, and rankings (e.g., "Top 5/100 CVs").
- **Exportable**: Timeline exportable as PDF for internal reports.

## HR Performance Tracking

- **Metrics**: Tracks HR performance (sourced CVs, pass rates, onboarded CVs, average processing time). Displayed in dashboards with team comparisons.
- **Agency Support**: Metrics per client for commission tracking.

## Multi-Tenancy

- **Tenant Isolation**: Separate data for each company/agency (tenant). URLs scoped to tenantId (e.g., `/abc-corp/jobs`).
- **Agency Mode**: Manage jobs/CVs per client (max 10 clients in MVP). Export branded reports (PDF/CSV) with client logos.

## Super Admin Management

- **System-Wide Control**: Super admins manage tenants, users, and global configs (e.g., CV expire time, AI thresholds) via `/super-admin/*` pages.
- **Billing**: Set rates, track payments per tenant (freemium: 5 free onboarded CVs initially, 1/month thereafter).

## Reporting

- **Tenant Reports**: Stats on jobs, CVs, pass rates, exportable as PDF/CSV.
- **System Reports**: Super admin views total tenants, onboarded CVs, revenue.

## Security and Compliance

- **GDPR Compliance**: Encrypts data, auto-deletes rejected CVs after 6 months.
- **Role-Based Access**: Supports super_admin, admin, editor, viewer roles. Super admin requires 2FA.

## Pricing Model

- **Freemium**: Free for 5 onboarded CVs initially, 1 CV/month thereafter.
- **Paid**: Pay-per-onboard ($5-10/CV) or subscription ($20-50/user/month) for unlimited onboarding, advanced AI, and custom reports.
