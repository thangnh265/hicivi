# Hicivi: HR CV Management System

Hicivi is a multi-tenant SaaS platform designed to streamline CV management for HR professionals, supporting both in-house and agency recruiters. It enables HR teams to create jobs, collect CVs via public forms or manual uploads, and leverage AI (OCR/NLP) to extract candidate information (skills, experience) for efficient screening. The system supports multi-stage hiring with automated status tracking (Pending, In Review, Passed, Rejected, Onboarded), AI-powered CV-JD matching, and side-by-side CV comparisons with highlighted strengths.

Key features:

- **Multi-Tenancy**: Isolated data for companies/agencies, with agency mode for client-specific jobs.
- **AI Integration**: Scores CVs (0-100%), extracts key info, matches JD.
- **HR Performance**: Tracks sourced CVs, pass rates, onboarding success.
- **Automation**: Auto-rejects CVs after 3 weeks, sends email/SMS notifications.
- **Reporting**: Exportable branded reports (PDF/CSV) for agencies.
- **Security**: GDPR-compliant, encrypted data, role-based access (super_admin, admin, editor, viewer).

**Tech Stack**: Next.js, Node.js/Express, PostgreSQL, MongoDB, AWS S3/Lambda, Tesseract.js, Hugging Face (BERT).

Hicivi uses a freemium model: free for 5 onboarded CVs initially, 1 free CV/month, pay-per-onboard or subscription for unlimited use. Built as a monolith for MVP, with plans for microservices.
