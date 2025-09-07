# Tech Stack for Hicivi.com

## Frontend

- **Next.js**: React framework for SSR, SEO, and dynamic routing.
- **Material-UI**: UI components for consistent, responsive design.
- **Chart.js**: Visualizations for dashboards and reports.
- **React-PDF**: Preview CV files.
- **Zustand**: Lightweight state management.
- **Axios**: API calls.

## Backend

- **Node.js/Express**: RESTful API, scalable for MVP.
- **PostgreSQL**: Structured data (tenants, jobs, users).
- **MongoDB**: Unstructured data (CV files, AI extracts).
- **AWS S3**: File storage for CVs.
- **AWS Lambda**: Serverless for AI tasks.
- **BullMQ**: Job queues for automation (e.g., auto-reject CVs).
- **Nodemailer/Twilio**: Email/SMS notifications.

## AI/ML

- **Tesseract.js**: OCR for CV parsing.
- **Hugging Face (BERT)**: NLP for JD-CV matching, skill extraction.
- **AWS Textract** (optional): Advanced OCR for scale.

## DevOps

- **Docker**: Containerization for consistent deployment.
- **GitHub Actions**: CI/CD pipeline.
- **Terraform**: Infrastructure as Code.
- **Prometheus/Grafana**: Monitoring.
- **Sentry**: Error tracking.

## Security

- **Auth0**: JWT-based auth, 2FA for super admin.
- **GDPR Compliance**: Data encryption, auto-delete CVs after 6 months.

## Why This Stack?

- **Cost-effective**: AWS free tier, open-source libs for MVP.
- **Scalable**: Monolith for simplicity, serverless for AI, multi-tenancy support.
- **Developer-friendly**: Popular frameworks (React, Node.js) reduce onboarding time.
- **AI-ready**: Pre-trained models (BERT) minimize training effort.
