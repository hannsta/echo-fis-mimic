# FIS Code Connect - Pendo Tracking Reference

## Application Overview

FIS Code Connect is a financial integration platform demo that showcases API setup workflows, dashboard analytics, and integration examples. This application is designed to demonstrate Pendo tracking capabilities across complex user journeys with multiple friction points and conversion opportunities.

## Core User Workflows

### 1. New User Onboarding Journey
**Primary Path**: Landing → Dashboard → Setup Wizard → Integration
**Key Conversion Points**: Setup completion, successful API connection, integration deployment

### 2. Integration Setup Process  
**Primary Path**: Setup Wizard (4-step process) with validation checkpoints
**Key Friction Points**: Form validation errors, connection test failures, credential issues

### 3. Dashboard Exploration
**Primary Path**: Dashboard analytics review → Integration examples → Setup initiation
**Key Engagement Points**: Metric interaction, code example viewing, documentation access

## Tracking IDs by Feature Category

### Header Navigation (`src/components/Header.tsx`)
```
header-logo                 // FIS logo and branding click
header-main-navigation      // Main nav container for group analysis
header-nav-dashboard        // Dashboard page navigation
header-nav-integration      // Integration page navigation  
header-nav-setup           // Setup wizard navigation
header-action-buttons      // Action button group container
header-button-status       // System status checker
header-button-settings     // Settings access
header-button-user         // User profile/account access
```

**Workflow Usage**: Track navigation patterns, identify preferred entry points, measure cross-page engagement

### Dashboard Page (`src/pages/Index.tsx`)
```
dashboard-content          // Main dashboard container for time-on-page tracking
```

**Workflow Usage**: Measure dashboard engagement duration, identify users ready for integration setup

### Integration Examples Page (`src/pages/Integration.tsx`)  
```
integration-content        // Integration examples and documentation container
```

**Workflow Usage**: Track code example engagement, identify technical users, measure documentation effectiveness

### Setup Wizard - Multi-Step Process (`src/components/SetupWizard.tsx`)

#### Overall Wizard Tracking
```
setup-wizard-title         // Wizard entry point
setup-progress-tracker     // Progress indicator interaction
wizard-navigation          // Navigation container
wizard-back-button         // Step navigation backwards
wizard-next-button         // Step navigation forwards (key conversion metric)
```

#### Step 1: Integration Type Selection
```
setup-step-1-indicator     // Step 1 progress indicator
setup-step-1-title         // Step 1 heading
integration-type-selection // Selection container for drop-off analysis
integration-type-dropdown  // Dropdown interaction
integration-option-payment-processing   // Payment API selection
integration-option-account-management   // Account API selection  
integration-option-transaction-history  // Transaction API selection
integration-option-risk-assessment      // Risk API selection
integration-info-panel     // Additional info panel engagement
```

**Key Metrics**: Selection completion rate, option preference distribution, info panel engagement

#### Step 2: Credentials Configuration
```
setup-step-2-indicator     // Step 2 progress indicator
setup-step-2-title         // Step 2 heading
credentials-configuration  // Form container for completion tracking
environment-selector       // Environment dropdown
env-sandbox                // Sandbox environment selection
env-staging                // Staging environment selection
env-production             // Production environment selection
api-key-input              // API key field interaction
secret-key-input           // Secret key field interaction  
endpoint-input             // Custom endpoint field interaction
security-warning          // Security notice engagement
```

**Key Metrics**: Form completion rate, field abandonment points, environment preferences, validation error frequency

#### Step 3: Connection Testing
```
setup-step-3-indicator     // Step 3 progress indicator
setup-step-3-title         // Step 3 heading
connection-testing         // Testing container
test-connection-button     // Primary CTA for connection test
connection-details         // Connection summary review
```

**Key Metrics**: Test button click rate, test success/failure tracking, retry behavior analysis

#### Step 4: Review & Deployment
```
setup-step-4-indicator     // Step 4 progress indicator
setup-step-4-title         // Step 4 heading
deployment-review          // Final review container
deploy-integration-button  // Final deployment CTA (primary conversion)
```

**Key Metrics**: Final conversion rate, deployment success tracking

### Footer Links (`src/pages/Index.tsx`, `src/pages/Integration.tsx`)
```
footer-privacy-policy      // Privacy policy access
footer-terms-service       // Terms of service access
footer-support            // Support channel access
footer-contact            // Contact form/info access
```

**Workflow Usage**: Support engagement tracking, legal document access patterns

## Recommended Test Scenarios for Data Generation

### High-Value User Journey (Successful)
1. `header-logo` → `header-nav-dashboard` → `header-nav-setup`
2. Complete all wizard steps: `integration-type-dropdown` → `integration-option-payment-processing`
3. Fill credentials: `environment-selector` → `env-production` → `api-key-input` → `secret-key-input`
4. Test connection: `test-connection-button` (success)
5. Deploy: `deploy-integration-button`

### Drop-off Scenario (Form Abandonment)
1. `header-nav-setup` → `integration-type-dropdown` → `integration-option-account-management`
2. `wizard-next-button` → `api-key-input` → (abandon without completing)
3. Alternative: Fill partially → `test-connection-button` → (connection fails) → exit

### Exploration Pattern (Research Mode)
1. `header-nav-dashboard` → `header-nav-integration` → `integration-content`
2. `header-nav-setup` → `integration-info-panel` → `security-warning`
3. `wizard-back-button` → `header-nav-integration` → `footer-support`

### Friction Points to Simulate
- Form validation errors (empty required fields)
- Connection test failures (retry behavior)
- Step navigation without completion
- Cross-page navigation without task completion
- Settings/status button clicks (feature discovery)

## User Personas for Testing

### Technical Integrator
- High engagement with `integration-content`
- Prefers `env-production` 
- Uses `endpoint-input` for custom configurations
- High completion rate through wizard

### Business Evaluator  
- Focuses on `dashboard-content`
- Reviews `integration-info-panel` extensively
- May abandon at credentials step
- Clicks `footer-support` for assistance

### Curious Explorer
- Navigates between all pages frequently
- Clicks `header-button-status` and `header-button-settings`
- Low task completion, high exploration

Use these tracking IDs and workflows to generate realistic user interaction data that demonstrates Pendo's ability to identify user behavior patterns, conversion bottlenecks, and optimization opportunities.

---

## Development Information

### Project URL
**URL**: https://lovable.dev/projects/0c9623d3-b358-413c-90c9-fa17619eabbb

### Technologies Used
- Vite
- TypeScript  
- React
- shadcn-ui
- Tailwind CSS

### How to Run Locally
```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start development server
npm run dev
```

### Deployment
Simply open [Lovable](https://lovable.dev/projects/0c9623d3-b358-413c-90c9-fa17619eabbb) and click on Share → Publish.