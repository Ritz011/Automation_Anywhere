# Automation Anywhere Community Edition - Playwright Automation

## Project Overview
This project contains automated UI and API tests for the Automation Anywhere Community Edition platform using **Playwright** with **Page Object Model (POM)** design pattern.  

The project demonstrates:
- UI automation for various use cases (Message Box creation, Form creation with file upload)
- API automation for creating Learning Instances
- Authentication management using saved session state (`auth.json`)
- Best practices for assertions, file uploads, and network interactions

---

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Notes](#notes)
- [Contributing](#contributing)

---

## Prerequisites
- Node.js >= 18
- npm or yarn
- Playwright
- Access to [Automation Anywhere Community Edition](https://community.cloud.automationanywhere.digital)
- Working internet connection (ensure your network allows access to Automation Anywhere domains)

---

## Project Structure

```text
Automation_Assignment/
├── tests/
│   ├── ui/
│   │   ├── usecase1-messagebox.spec.js
│   │   ├── usecase2-form-upload.spec.js
│   │   └── sample.spec.js
│   ├── api/
│   │   └── usecase3-learning-instance.spec.js
│   └── auth/
│       └── saveAuth.spec.js
├── pages/
│   ├── LoginPage.js
│   └── OtherPageObjects.js
├── resources/
│   └── sample.pdf
├── auth.json
├── package.json
└── playwright.config.js

```

## Setup
### 1. Clone the repository

```text
git clone <repo-url>
cd Automation_Assignment
```

### 2. Install dependencies:

```text
npm install
npx playwright install
```

### 3. Save your authentication state:
```text
npx playwright test tests/auth/saveAuth.spec.js --headed
```

Login manually when the browser opens.
Close the browser when done.
auth.json will be created automatically and used for future tests.


## Running Tests
### Run all tests (single worker recommended):

```text
npx playwright test --workers=1 --headed
```
## Run a specific test file:
```text
npx playwright test tests/ui/usecase1-messagebox.spec.js
```
## Debug mode (slower, visible browser):
```text
npx playwright test --headed --slow-mo=500
```

## Notes
UI Tests: All UI tests use auth.json to bypass login.  
API Tests: API requests include X-Authorization header using token from auth.json.  
File Uploads: Place files in tests/resources/ and use path.resolve to reference them.  
Network Issues: If Playwright times out, check VPN, firewall, or try mobile hotspot.

## Contributing
Create a branch for your changes: 
```text
git checkout -b feature/my-feature
```
Follow the Page Object Model (POM) pattern for new UI tests.  
Add new API endpoints under tests/api.  
Ensure all tests pass locally before committing.

## Author
Ritika Verma
