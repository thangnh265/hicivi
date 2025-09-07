# UI Mockups for Hicivi.com

## Tenant-Facing Pages

### Dashboard (`/[tenantId]/dashboard`)

- **Description**: Overview stats for HR (jobs, CVs, performance). Agency mode has client dropdown.
- **Elements**: Header (logo, tenant name, logout), Sidebar (Jobs, CVs, Reports, Settings), Cards (Active Jobs, CVs), Pie Chart (CV status), HR Performance Table.
- **Mockup**:
  ```
  +------------------------------ HEADER ------------------------------+
  | Hicivi Logo | ABC Corp | User: HR Admin | Logout                |
  +------------------------------ SIDEBAR -----------------------------+
  | Dashboard | Jobs | CVs | Reports | Settings                     |
  +------------------------------ MAIN --------------------------------+
  | [Card] Active Jobs: 5 | [Card] Total CVs: 100 | [Card] Onboarded: 10 |
  | [Pie Chart: CV Status] Pending 40% | In Review 30% | Rejected 20%   |
  | [Table: HR Performance]                                            |
  | | HR Name | Sourced CVs | Onboarded | Avg Time                   |
  | | John    | 50         | 5         | 2 weeks                    |
  +--------------------------------------------------------------------+
  ```

### List Jobs (`/[tenantId]/jobs`)

- **Description**: List jobs with filters (status, deadline).
- **Elements**: Table (Title, Status, Deadline, CV Count, Actions), Create Job button.
- **Mockup**:
  ```
  +------------------------------ MAIN --------------------------------+
  | [Button] Create New Job | [Filter] Status | [Search] Title        |
  | [Table: Jobs]                                                     |
  | | Title         | Status | Deadline   | CVs | Actions              |
  | | Senior Dev    | Open   | 2025-10-01 | 15  | View/Edit/Delete     |
  +--------------------------------------------------------------------+
  ```

### Job Detail (`/[tenantId]/jobs/[jobId]`)

- **Description**: Job details, CV list, share public form.
- **Elements**: JD text, Stats, CV Table (Name, Status, Score, Actions).
- **Mockup**:
  ```
  +------------------------------ MAIN --------------------------------+
  | Job: Senior Dev | Status: Open | Deadline: 2025-10-01            |
  | [Button] Share Form | [Button] Close Job                      |
  | [Section: Job Description] Requirements: 5+ years, React...       |
  | [Table: CVs]                                                     |
  | | Candidate | Status  | AI Score | Actions                       |
  | | John Doe | Pending | 85%      | View | Score | Schedule       |
  +--------------------------------------------------------------------+
  ```

### CV Detail (`/[tenantId]/cvs/[cvId]`)

- **Description**: CV timeline, scores, AI extract, comparison.
- **Elements**: Candidate info, PDF preview, Timeline, Scores, Comments.
- **Mockup**:
  ```
  +------------------------------ MAIN --------------------------------+
  | CV: John Doe | Job: Senior Dev | Status: In Review              |
  | [Button] Update Status | [Button] Compare                       |
  | [Section: Extracted Info] Name: John | Exp: 6 years | Skills: React|
  | [PDF Preview] [Download Files]                                    |
  | [Timeline]                                                        |
  | - Submitted: 2025-09-01                                           |
  | - AI Scored: 85% on 2025-09-02                                   |
  +--------------------------------------------------------------------+
  ```

### CV Comparison (`/[tenantId]/cvs/compare?cvIds=...`)

- **Description**: Side-by-side CV vs JD comparison.
- **Elements**: Table (Skills, Exp, Education vs JD, CV1, CV2).
- **Mockup**:
  ```
  +------------------------------ MAIN --------------------------------+
  | Compare: John vs Jane vs JD                                       |
  | [Table: Comparison]                                               |
  | | Attribute | JD Req      | John Doe   | Jane Smith             |
  | | Experience| 5+ years    | 6 years (✔)| 4 years (✘)           |
  | | Skills    | React, Node | React, Node| React only             |
  +--------------------------------------------------------------------+
  ```

### Reports (`/[tenantId]/reports`)

- **Description**: Tenant-level reports, exportable.
- **Elements**: Charts (CV conversion), Table stats, Export buttons.
- **Mockup**:
  ```
  +------------------------------ MAIN --------------------------------+
  | Reports for ABC Corp | [Filter] Date Range                      |
  | [Bar Chart: Conversion] Sourced: 100 | Onboarded: 10%            |
  | [Table: Job Stats]                                               |
  | | Job Title | CVs | Pass Rate | Avg Score                      |
  | | Senior Dev| 15  | 40%       | 85%                            |
  | [Button] Export PDF | [Button] Export CSV                      |
  +--------------------------------------------------------------------+
  ```

### Signup (`/signup`)

- **Description**: Register tenant, choose mode.
- **Elements**: Form (Company Name, Email, Password, Mode).
- **Mockup**:
  ```
  +------------------------------ PUBLIC PAGE -------------------------+
  | Hicivi Logo | [Link] Login                                       |
  | [Input] Company Name: ________________                           |
  | [Input] Email: ________________                                  |
  | [Input] Password: ________________                              |
  | [Radio] Mode: [ ] Internal [ ] Agency                           |
  | [Button] Sign Up                                                |
  +--------------------------------------------------------------------+
  ```

### Login (`/login`)

- **Description**: User login, redirect to dashboard.
- **Elements**: Form (Email, Password), Forgot Password link.
- **Mockup**:
  ```
  +------------------------------ PUBLIC PAGE -------------------------+
  | Hicivi Logo | [Link] Sign Up                                     |
  | [Input] Email: ________________                                  |
  | [Input] Password: ________________                               |
  | [Link] Forgot Password?                                         |
  | [Button] Log In                                                 |
  +--------------------------------------------------------------------+
  ```

### List Clients (`/[tenantId]/clients`) (Agency Mode)

- **Description**: List clients for agency.
- **Elements**: Table (Client Name, Contact, Jobs, Actions).
- **Mockup**:
  ```
  +------------------------------ MAIN --------------------------------+
  | [Button] Add Client | [Filter] Search Name                     |
  | [Table: Clients]                                                 |
  | | Client Name | Contact Email | Jobs | Actions                 |
  | | XYZ Corp   | xyz@corp.com  | 3    | View Jobs | Edit | Delete |
  +--------------------------------------------------------------------+
  ```

### Client Jobs (`/[tenantId]/clients/[clientId]/jobs`) (Agency Mode)

- **Description**: Jobs for specific client.
- **Elements**: Table (Job Title, Status, Deadline, CVs).
- **Mockup**:
  ```
  +------------------------------ MAIN --------------------------------+
  | Client: XYZ Corp | [Button] Create Job                      |
  | [Table: Jobs]                                                    |
  | | Title      | Status | Deadline   | CVs | Actions              |
  | | Junior Dev | Open   | 2025-10-15 | 10  | View/Edit/Delete     |
  +--------------------------------------------------------------------+
  ```

### Create Client Job (`/[tenantId]/clients/[clientId]/jobs/create`)

- **Description**: Create job for client.
- **Elements**: Form (Job Title, Description, Deadline).
- **Mockup**:
  ```
  +------------------------------ MAIN --------------------------------+
  | Create Job for XYZ Corp                                          |
  | [Input] Job Title: ________________                              |
  | [Textarea] Description: __________________________               |
  | [Date Picker] Deadline: ________________                         |
  | [Button] Create Job | [Button] Cancel                         |
  +--------------------------------------------------------------------+
  ```

### Settings (`/[tenantId]/settings`)

- **Description**: Tenant settings (mode, integrations).
- **Elements**: Tabs (General, Integrations, Team), Save button.
- **Mockup**:
  ```
  +------------------------------ MAIN --------------------------------+
  | Settings for ABC Corp                                            |
  | [Tabs] General | Integrations | Team                           |
  | [Input] Company Name: ABC Corp                                   |
  | [Radio] Mode: [x] Internal [ ] Agency                           |
  | [Input] Google Calendar API Key: ________________               |
  | [Button] Save Changes | [Button] Cancel                        |
  +--------------------------------------------------------------------+
  ```

### Manage Users (`/[tenantId]/admin/users`)

- **Description**: Manage HR team in tenant.
- **Elements**: Table (Name, Email, Role, Actions), Invite button.
- **Mockup**:
  ```
  +------------------------------ MAIN --------------------------------+
  | Manage Team | [Button] Invite User                           |
  | [Table: Users]                                                  |
  | | Name      | Email         | Role  | Actions                  |
  | | John Doe | john@abc.com | Admin | Edit Role | Remove       |
  +--------------------------------------------------------------------+
  ```

## Super Admin Pages

### Super Admin Login (`/super-admin/login`)

- **Description**: Secure login for super admin.
- **Elements**: Form (Email, Password, 2FA).
- **Mockup**:
  ```
  +------------------------------ SECURE PAGE -------------------------+
  | Hicivi Super Admin | [Warning] Authorized Access Only          |
  | [Input] Email: ________________                                  |
  | [Input] Password: ________________                               |
  | [Input] 2FA Code: ________________                              |
  | [Button] Log In                                                 |
  +--------------------------------------------------------------------+
  ```

### Super Admin Dashboard (`/super-admin/dashboard`)

- **Description**: System-wide stats (tenants, jobs, CVs).
- **Elements**: Cards, Charts, Alerts.
- **Mockup**:
  ```
  +------------------------------ HEADER (Dark/Red) ------------------+
  | Hicivi Super Admin | SuperAdmin | Logout                        |
  +------------------------------ SIDEBAR ----------------------------+
  | Dashboard | Tenants | Users | Config | Reports | Billing       |
  +------------------------------ MAIN -------------------------------+
  | [Card] Total Tenants: 50 | [Card] Active Jobs: 200 | [Card] Onboarded: 1000 |
  | [Line Chart: Tenant Growth]                                     |
  | [Alerts] Tenant ABC: High CV Volume                             |
  +--------------------------------------------------------------------+
  ```

### Tenants Management (`/super-admin/tenants`)

- **Description**: List and manage tenants.
- **Elements**: Table (Name, Mode, Status, Actions).
- **Mockup**:
  ```
  +------------------------------ MAIN -------------------------------+
  | [Button] Create Tenant | [Filter] Mode | [Search] Name          |
  | [Table: Tenants]                                                |
  | | Name      | Mode    | Created   | Status | Actions            |
  | | ABC Corp | Internal| 2025-01-01| Active | Edit/Suspend/Delete|
  +--------------------------------------------------------------------+
  ```

### Users Management (`/super-admin/users`)

- **Description**: Manage users across tenants.
- **Elements**: Table (Name, Email, Tenant, Role, Actions).
- **Mockup**:
  ```
  +------------------------------ MAIN -------------------------------+
  | [Button] Add User | [Filter] Role | [Search] Email             |
  | [Table: Users]                                                  |
  | | Name      | Email         | Tenant   | Role       | Actions   |
  | | Super John| super@admin.com| NULL    | Super Admin| Edit/Remove|
  +--------------------------------------------------------------------+
  ```

### System Config (`/super-admin/config`)

- **Description**: Dynamic system configuration.
- **Elements**: Form (CV Expire, AI Threshold, Billing Rates).
- **Mockup**:
  ```
  +------------------------------ MAIN -------------------------------+
  | System Configuration                                            |
  | [Tabs] General | AI | Billing | Security                      |
  | [Input] CV Expire Time (weeks): 3                              |
  | [Input] AI Score Threshold: 0.5                                |
  | [Button] Save Changes | [Button] Reset                        |
  +--------------------------------------------------------------------+
  ```

### System Reports (`/super-admin/reports`)

- **Description**: System-wide reports, exportable.
- **Elements**: Charts, Table (Tenant Stats), Export buttons.
- **Mockup**:
  ```
  +------------------------------ MAIN -------------------------------+
  | System Reports | [Filter] Date Range                           |
  | [Bar Chart: Total Onboarded] 5000 CVs                         |
  | [Table: Tenant Stats]                                         |
  | | Tenant    | Jobs | CVs | Onboarded | Revenue               |
  | | ABC Corp | 10   | 200 | 20        | $200                  |
  | [Button] Export PDF | [Button] Export CSV                     |
  +--------------------------------------------------------------------+
  ```

### Billing Management (`/super-admin/billing`)

- **Description**: Manage billing across tenants.
- **Elements**: Table (Tenant, Onboarded CVs, Due, Status).
- **Mockup**:
  ```
  +------------------------------ MAIN -------------------------------+
  | Billing | [Button] Update Rates                               |
  | [Table: Tenant Billing]                                       |
  | | Tenant    | Onboarded CVs | Due | Status | Actions          |
  | | ABC Corp | 20            | $100| Paid   | Invoice/Send     |
  | [Summary] Total Revenue: $5000                                |
  +--------------------------------------------------------------------+
  ```
