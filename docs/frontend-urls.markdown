# Frontend URLs for Hicivi.com

## Public Pages

- **/**: Landing page (signup/login, overview).
- **/signup**: Register tenant (company/agency name, email, password, mode).
- **/login**: User login, redirect to dashboard.
- **/jobs/[jobId]/form**: Public CV submission form (no auth).

## Tenant Pages (Private, require auth)

- **/[tenantId]/dashboard**: Tenant stats (jobs, CVs, HR performance).
- **/[tenantId]/jobs**: List jobs, filter by status/deadline.
- **/[tenantId]/jobs/create**: Create new job.
- **/[tenantId]/jobs/[jobId]**: Job details, CV list.
- **/[tenantId]/cvs**: List CVs, filter by job/status.
- **/[tenantId]/cvs/[cvId]**: CV details (timeline, scores).
- **/[tenantId]/cvs/compare**: Compare CVs (query param: cvIds).
- **/[tenantId]/clients** (Agency): List clients.
- **/[tenantId]/clients/[clientId]/jobs** (Agency): Client-specific jobs.
- **/[tenantId]/clients/[clientId]/jobs/create** (Agency): Create job for client.
- **/[tenantId]/settings**: Tenant settings (mode, integrations).
- **/[tenantId]/admin/users**: Manage HR team.

## Super Admin Pages (Private, require super_admin role)

- **/super-admin/login**: Secure login with 2FA.
- **/super-admin/dashboard**: System-wide stats (tenants, jobs, CVs).
- **/super-admin/tenants**: Manage tenants (create, edit, suspend).
- **/super-admin/users**: Manage users across tenants.
- **/super-admin/config**: Dynamic system config (CV expire, AI settings).
- **/super-admin/reports**: System-wide reports, exportable.
- **/super-admin/billing**: Manage billing (rates, payments).
