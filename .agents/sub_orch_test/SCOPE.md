# Scope: E2E Testing Track

## Architecture
- **Testing Framework**: Playwright (opaque-box, requirement-driven, running against the local Next.js dev server or build).
- **Core Features (N=5)**:
  - **F1: Styling & Theme Integration**: Brand book color variables (`#0635A6`, `#FFEC00`, `#FFFFFF`), custom font application (Anton, Bebas Neue, Inter via next/font/google).
  - **F2: Visual Experience & Micro-interactions**: Hover effects, smooth transitions, glassmorphism design elements (shadows, borders, glass gradients).
  - **F3: Public Page Layout Integrity & Copywriting**: Responsive layout across 11 public pages, Argentine "voseo" copywriting, Unified Header & Footer.
  - **F4: Calculator Pages Business Logic**: Interactive calculators for Express and Low Cost, validations of values, pricing calculations, input limits.
  - **F5: Contact Form & Navigation**: Contact page fields and validation logic, WhatsApp communication links, navigation links routing.

## Milestones
| # | Name | Scope | Dependencies | Status | Conversation ID |
|---|---|---|---|---|---|
| 1 | M1: Test Infra & Runner Setup | Configure Playwright, install packages, write test runner script, and run simple verification check | none | IN_PROGRESS | fd600920, 0cd9810e, 0ac08f12 |
| 2 | M2: Tier 1 Feature Coverage | Implement at least 25 tests covering all 5 core features in normal scenarios | M1 | PLANNED | |
| 3 | M3: Tier 2 Boundary & Corner Cases | Implement at least 25 edge case, invalid input, and extreme viewport size tests | M2 | PLANNED | |
| 4 | M4: Tier 3 & 4 Complex Scenarios | Implement at least 5 pairwise cross-feature tests and at least 5 real-world workload tests | M3 | PLANNED | |
| 5 | M5: Full Run & Final Attestation | Run E2E suite, perform auditing/verification, write TEST_INFRA.md and TEST_READY.md | M4 | PLANNED | |

## Interface Contracts
- **Test Runner Command**: `pnpm test:e2e`
- **Local Application Target**: `http://localhost:3000`
- **Output Formats**: HTML/JSON test reports.
