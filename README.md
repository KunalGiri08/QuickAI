# QuickAI

[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B%20%7C%2020%2B-brightgreen.svg)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-19.2.6-blue.svg)](https://react.dev/)
[![Express Version](https://img.shields.io/badge/Express-5.2.1-lightgrey.svg)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.3-38B2AC.svg)](https://tailwindcss.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

> **QuickAI** is a modern, full-stack Software-as-a-Service (SaaS) content creation platform powered by generative AI. Built with React 19, Express 5, Neon Serverless PostgreSQL, Clerk Authentication, Google Gemini, Clipdrop, and Cloudinary.

---

## 📑 Table of Contents

- [Project Introduction](#-project-introduction)
  - [Overview](#overview)
  - [Problem It Solves](#problem-it-solves)
  - [Key Objectives](#key-objectives)
  - [Main Value Proposition](#main-value-proposition)
- [Implemented Features](#-implemented-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Installation & Local Setup](#-installation--local-setup)
- [Environment Variables](#-environment-variables)
- [API Overview](#-api-overview)
- [Database Design](#-database-design)
- [Authentication & Security](#-authentication--security)
- [AI & Media Integrations](#-ai--media-integrations)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [License](#-license)
- [Documentation Directory](#-documentation-directory)

---

## 🚀 Project Introduction

### Overview
**QuickAI** is an all-in-one AI-driven productivity suite designed for content creators, marketers, copywriters, and developers. It brings together advanced natural language generation, computer vision image manipulation, and document parsing into a single unified workspace.

### Problem It Solves
Creators and modern digital professionals frequently juggle fragmented tools: one subscription for text drafting, another for image generation, a standalone utility for background removal, and separate portals for document critique. QuickAI unifies these essential workflows into one cohesive, subscription-tiered platform with centralized history tracking and community sharing.

### Key Objectives
- **Centralize Creative Tooling**: Deliver text, image, and document AI capabilities within a unified user interface.
- **Enforce Fair-Use & Monetization**: Implement tiered subscription access with quota tracking for free users and unrestricted capabilities for premium members.
- **Ensure Speed & Reliability**: Leverage serverless PostgreSQL and cloud-based AI transformations to eliminate persistent infrastructure bottlenecks.
- **Deliver Modern User Experience**: Provide responsive, accessible, real-time UI components built with React 19 and Tailwind CSS v4.

### Main Value Proposition
QuickAI reduces content turnaround from hours to seconds by pairing cutting-edge models (**Gemini 3.5 Flash**, **Clipdrop**, and **Cloudinary AI**) with a friction-free authentication and billing experience driven by Clerk.

---

## ✨ Implemented Features

### 1. ✍️ AI Article Writer (`/ai/write-article`)
- Generates comprehensive, well-structured articles formatted in Markdown based on topic input.
- Configurable target word count:
  - **Short**: 500–800 words (Max 3,000 tokens)
  - **Medium**: 800–1200 words (Max 4,000 tokens)
  - **Long**: 1200+ words (Max 5,000 tokens)
- Real-time Markdown rendering via `react-markdown`.
- Quota: Free users receive up to 10 free generations; premium users have unlimited access.

### 2. 🏷️ AI Blog Title Generator (`/ai/blog-titles`)
- Produces catchy, SEO-friendly title ideas for blogs and social posts.
- Category filters: *General, Technology, Business, Health, Lifestyle, Education, Travel, and Food*.
- Driven by Gemini 3.5 Flash with a 2,000-token limit.
- Quota: Included in the 10 free generation tier.

### 3. 🎨 AI Image Generator (`/ai/generate-images`)
- High-resolution text-to-image synthesis powered by the Clipdrop API.
- Multiple artistic styles: *Realistic, Ghibli style, Anime style, Cartoon style, Fantasy style, Realistic style, 3D style, and Portrait style*.
- Permanent cloud hosting via Cloudinary.
- Optional toggle to publish generated artwork directly to the community showcase.
- Tier: **Premium Only**.

### 4. 🪄 Background Removal (`/ai/remove-background`)
- Upload any standard image format (JPG, PNG) to strip the background automatically.
- Powered by Cloudinary's neural background removal transformations.
- Tier: **Premium Only**.

### 5. ✂️ Object Removal (`/ai/remove-object`)
- Upload an image and specify a single object (e.g., `watch`, `chair`) to erase.
- Powered by Cloudinary Generative Inpainting (`gen_remove:<object>`).
- Tier: **Premium Only**.

### 6. 📄 AI Resume Reviewer (`/ai/review-resume`)
- Upload PDF resumes (up to 5MB) for comprehensive evaluation.
- Server extracts text via `pdf-parse` and feeds content into Gemini 3.5 Flash.
- Delivers structured critique detailing strengths, weaknesses, and actionable career advice.
- Tier: **Premium Only**.

### 7. 📊 User Dashboard (`/ai`)
- Real-time analytics showing total creations count and active subscription plan badge (`Free` or `Premium`).
- Chronological list of user-generated content (`/api/user/get-user-creations`).
- Interactive expandable creation cards supporting Markdown view and image display.

### 8. 🌐 Community Showcase & Social Likes (`/ai/community`)
- Public gallery showcasing images flagged with `publish = true`.
- Real-time like counter with interactive like/unlike toggling stored in PostgreSQL arrays.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) (`19.2.6`)
- **Build Tool**: [Vite 8](https://vitejs.dev/) (`8.0.12`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`4.3.0`) via `@tailwindcss/vite`
- **Routing**: [React Router DOM v7](https://reactrouter.com/) (`7.16.0`)
- **Icons**: [Lucide React](https://lucide.dev/) (`1.17.0`)
- **HTTP Client**: [Axios](https://axios-http.com/) (`1.17.0`)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/) (`2.6.0`)
- **Markdown Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown) (`10.1.0`)

### Backend
- **Server Framework**: [Express 5](https://expressjs.com/) (`5.2.1`) in ES Module mode
- **File Uploads**: [Multer](https://github.com/expressjs/multer) (`2.1.1`) (Disk storage)
- **Document Parsing**: [pdf-parse](https://www.npmjs.com/package/pdf-parse) (`1.1.1`)
- **HTTP Client**: [Axios](https://axios-http.com/) (`1.16.1`)
- **CORS**: `cors` (`2.8.6`)
- **Environment Management**: `dotenv` (`17.4.2`)
- **Development Monitor**: `nodemon` (`3.1.14`)

### Database
- **Engine**: [Neon Serverless PostgreSQL](https://neon.tech/)
- **Client Driver**: [`@neondatabase/serverless`](https://github.com/neondatabase/serverless) (`1.1.0`)

### Authentication & Authorization
- **Identity Provider**: [Clerk](https://clerk.com/)
- **Frontend SDK**: [`@clerk/clerk-react`](https://clerk.com/docs/references/react/overview) (`5.61.8`)
- **Backend SDK**: [`@clerk/express`](https://clerk.com/docs/backend-requests/handling/nodejs) (`2.1.22`)
- **Access Control**: Role/Plan based via Clerk user entitlements (`req.auth().has({ plan: 'premium' })`) and metadata tracking (`user.privateMetadata.free_usage`).

### AI & Media Services
- **Language Models**: Google Gemini 3.5 Flash (`gemini-3.5-flash`) via the [OpenAI Node SDK](https://github.com/openai/openai-node) (`6.42.0`) adapter.
- **Image Generation**: [Clipdrop Text-to-Image API](https://clipdrop.co/apis).
- **Media Cloud & AI Transformations**: [Cloudinary](https://cloudinary.com/) (`cloudinary` v2.10.0) with generative removal and background removal add-ons.

---

## 🏗️ System Architecture

QuickAI employs a decoupled, stateless REST API architecture where client and server communicate via JSON and multipart form data over HTTPS, protected by JWT bearer tokens.

```mermaid
flowchart TD
    subgraph Client ["Client (React 19 SPA)"]
        UI["Landing & Protected Pages"]
        ClerkUI["Clerk React Auth & Billing"]
        Axios["Axios (Bearer Token)"]
    end

    subgraph API ["Server (Express 5 REST API)"]
        ServerCore["server.js"]
        AuthGlobal["clerkMiddleware & requireAuth"]
        AuthTier["Tier & Quota Middleware (auth.js)"]
        AICtrl["AI Controller (aiController.js)"]
        UserCtrl["User Controller (userController.js)"]
        MulterStorage["Multer Disk Uploads"]
    end

    subgraph Storage ["Data & Media Tier"]
        Neon[("Neon Serverless PostgreSQL")]
        Cloudinary["Cloudinary Media Storage"]
    end

    subgraph AIProviders ["External AI Services"]
        Gemini["Google Gemini 3.5 Flash"]
        Clipdrop["Clipdrop API"]
    end

    UI --> ClerkUI
    UI --> Axios
    Axios -- "HTTP + JWT" --> ServerCore
    ServerCore --> AuthGlobal
    AuthGlobal -- "JSON Routes" --> AuthTier
    AuthGlobal -- "Multipart Routes" --> MulterStorage
    MulterStorage --> AuthTier
    AuthTier --> AICtrl
    AuthTier --> UserCtrl

    AICtrl -- "Prompts" --> Gemini
    AICtrl -- "Image Prompts" --> Clipdrop
    AICtrl -- "Uploads & Transforms" --> Cloudinary
    AICtrl -- "SQL Tagged Templates" --> Neon
    UserCtrl -- "SQL Tagged Templates" --> Neon
```

For full details, sequence diagrams, and design trade-offs, read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

---

## 📁 Project Structure

```text
QuickAI/
├── client/                     # Frontend Single Page Application (React 19 + Vite)
│   ├── public/                 # Static assets (favicons, background graphics)
│   ├── src/
│   │   ├── assets/             # Images, SVGs, and mock reference data
│   │   ├── components/         # Reusable UI widgets
│   │   │   ├── AiTools.jsx     # Landing page tools showcase grid
│   │   │   ├── CreationItem.jsx# Expandable item view for user dashboard
│   │   │   ├── Footer.jsx      # Global footer component
│   │   │   ├── Hero.jsx        # Landing hero banner
│   │   │   ├── Navbar.jsx      # Top navigation with Clerk authentication controls
│   │   │   ├── Plan.jsx        # Embedded Clerk PricingTable integration
│   │   │   ├── Sidebar.jsx     # Dashboard navigation bar with user profile
│   │   │   └── Testimonial.jsx # User social proof section
│   │   ├── pages/              # Application views & route handlers
│   │   │   ├── BlogTitles.jsx  # AI Blog Title Generator interface
│   │   │   ├── Community.jsx   # Public creation gallery and like feed
│   │   │   ├── Dashboard.jsx   # Metrics cards and user creation history
│   │   │   ├── GenerateImages.jsx # Text-to-image generation interface
│   │   │   ├── Home.jsx        # Public landing page
│   │   │   ├── Layout.jsx      # Protected layout wrapper with Clerk auth guard
│   │   │   ├── RemoveBackground.jsx # Background removal tool interface
│   │   │   ├── RemoveObjects.jsx    # Generative object removal interface
│   │   │   ├── ReviewResume.jsx     # PDF Resume Review interface
│   │   │   └── WriteArticle.jsx     # Article writing interface with length selection
│   │   ├── App.jsx             # Route definitions and toast container
│   │   ├── index.css           # Tailwind v4 import and custom utility classes
│   │   └── main.jsx            # Application entrypoint with ClerkProvider
│   ├── .env.example            # Sample client environment configuration
│   ├── package.json            # Client dependencies and build scripts
│   └── vite.config.js          # Vite build and Tailwind plugin config
│
├── server/                     # Backend REST API (Express 5.x)
│   ├── configs/
│   │   ├── cloudinary.js       # Cloudinary SDK credentials initialization
│   │   ├── db.js               # Neon serverless PostgreSQL client instance
│   │   └── multer.js           # DiskStorage configuration for file uploads
│   ├── controllers/
│   │   ├── aiController.js     # Handlers for Gemini, Clipdrop, and Cloudinary tools
│   │   └── userController.js   # Handlers for user history and community feeds
│   ├── middlewares/
│   │   └── auth.js             # Subscription tier checking & free quota tracker
│   ├── routes/
│   │   ├── aiRoutes.js         # Routes mapping to /api/ai/*
│   │   └── userRoutes.js       # Routes mapping to /api/user/*
│   ├── .env.example            # Sample server environment configuration
│   ├── package.json            # Server dependencies and scripts
│   └── server.js               # Express application entrypoint and middleware setup
│
├── docs/                       # Comprehensive Technical Documentation
│   ├── ARCHITECTURE.md         # Detailed architectural design & flow diagrams
│   ├── API_DOCUMENTATION.md    # Complete REST API reference with cURL examples
│   ├── DATABASE.md             # PostgreSQL schema, DDL scripts, and ER diagrams
│   ├── AUTHENTICATION.md       # Clerk JWT lifecycle, RBAC, and quota management
│   ├── ENVIRONMENT_SETUP.md    # Step-by-step developer installation guide
│   └── DEPLOYMENT.md           # Production deployment instructions
│
└── README.md                   # Project overview and documentation index
```

---

## 💻 Installation & Local Setup

### 1. Prerequisites
- **Node.js**: `v18.x` or `v20.x` or newer
- **npm**: `v9.x` or newer
- **Git**

### 2. Clone Repository
```bash
git clone https://github.com/your-username/quickai.git
cd quickai
```

### 3. Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Edit server/.env with your actual service credentials
npm run dev
```
The server will boot on `http://localhost:3000`. Test the health check endpoint at `http://localhost:3000/`.

### 4. Frontend Setup
In a new terminal window:
```bash
cd client
npm install
cp .env.example .env
# Edit client/.env to specify VITE_CLERK_PUBLISHABLE_KEY and VITE_BASE_URL
npm run dev
```
The client will launch at `http://localhost:5173`.

For detailed step-by-step account provisioning instructions, consult [docs/ENVIRONMENT_SETUP.md](docs/ENVIRONMENT_SETUP.md).

---

## 🔐 Environment Variables

### Server (`server/.env`)

| Variable | Description | Required | Example / Default |
|---|---|---|---|
| `PORT` | Listening port for Express server | No | `3000` |
| `DATABASE_URL` | Neon Serverless PostgreSQL connection URL | **Yes** | `postgresql://user:pass@ep-sample.neon.tech/neondb?sslmode=require` |
| `CLERK_PUBLISHABLE_KEY` | Clerk Publishable API Key | **Yes** | `pk_test_...` |
| `CLERK_SECRET_KEY` | Clerk Secret API Key | **Yes** | `sk_test_...` |
| `GEMINI_API_KEY` | Google Gemini API Key | **Yes** | `AIzaSy...` |
| `CLIPDROP_API_KEY` | Clipdrop Text-to-Image API Key | **Yes** | `xxxxxxxx...` |
| `CLOUDINARY_CLOUD_NAME`| Cloudinary Cloud Identifier | **Yes** | `quickai-cloud` |
| `CLOUDINARY_API_KEY` | Cloudinary API Key | **Yes** | `123456789012345` |
| `CLOUDINARY_API_SECRET`| Cloudinary API Secret | **Yes** | `xxxxxxxx...` |

### Client (`client/.env`)

| Variable | Description | Required | Example / Default |
|---|---|---|---|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk Publishable Key for React SDK | **Yes** | `pk_test_...` |
| `VITE_BASE_URL` | Base URL of backend Express API | **Yes** | `http://localhost:3000` |

> ⚠️ **Security Warning**: Never commit `.env` files containing real production secrets to version control. Always use `.env.example` as a template.

---

## 📡 API Overview

All routes under `/api/*` require a valid Clerk Bearer JWT token in the `Authorization` header.

| Method | Endpoint | Access Level | Description |
|---|---|---|---|
| `GET` | `/` | Public | Server health check (`"Server is Live!"`). |
| `POST` | `/api/ai/generate-article` | Free (10 uses) / Premium | Generates full-length markdown articles. |
| `POST` | `/api/ai/generate-blog-title` | Free (10 uses) / Premium | Generates creative blog title ideas. |
| `POST` | `/api/ai/generate-image` | **Premium Only** | Synthesizes an image and uploads to Cloudinary. |
| `POST` | `/api/ai/remove-image-background` | **Premium Only** | Removes background from an uploaded image. |
| `POST` | `/api/ai/remove-image-object` | **Premium Only** | Erases a specified object from an image. |
| `POST` | `/api/ai/resume-review` | **Premium Only** | Parses and analyzes an uploaded PDF resume. |
| `GET` | `/api/user/get-user-creations` | Authenticated | Retrieves current user's creation history. |
| `GET` | `/api/user/get-published-creations` | Authenticated | Retrieves public creations for community feed. |
| `POST` | `/api/user/toggle-like-creation` | Authenticated | Toggles like status on a published creation. |

For complete request/response schemas, JSON payloads, and cURL examples, see [docs/API_DOCUMENTATION.md](docs/API_DOCUMENTATION.md).

---

## 🗄️ Database Design

QuickAI utilizes a unified, polymorphic `creations` table in Neon PostgreSQL to track all generated content.

```mermaid
erDiagram
    CREATIONS {
        serial id PK
        varchar user_id "Clerk User ID"
        text prompt "Task prompt or action description"
        text content "Generated markdown or asset URL"
        varchar type "article | blog_title | image | resume_review"
        boolean publish "Visible in Community showcase"
        text[] likes "Array of Clerk User IDs"
        timestamptz created_at "Generation timestamp"
    }
```

For schema DDL scripts, indexing recommendations, and query design explanations, see [docs/DATABASE.md](docs/DATABASE.md).

---

## 🔒 Authentication & Security

1. **Authentication Flow**:
   - The React frontend handles authentication with Clerk's `<ClerkProvider>`.
   - Protected routes in `/ai/*` require an active session via `Layout.jsx`.
   - On the backend, `clerkMiddleware()` and `requireAuth()` inspect and validate incoming session tokens.
2. **Tier-Based Authorization (`server/middlewares/auth.js`)**:
   - `req.auth().has({ plan: 'premium' })` identifies premium members.
   - For free users, lifetime usage is tracked in Clerk's `user.privateMetadata.free_usage`.
   - Once a free user exceeds 10 generations across text tools, generation requests return `"Limit reached. Upgrade to continue."`.
   - Media tools and resume reviews immediately check `req.plan === 'premium'`.
3. **Security Standards**:
   - **No Secrets on Client**: All third-party AI keys remain strictly server-side.
   - **SQL Injection Prevention**: All Neon database queries use tagged template literals (`sql`...``) with automatic parameterized inputs.
   - **File Size Validation**: Resume PDF uploads are capped at 5MB.

For deep technical details on session handling and RBAC, read [docs/AUTHENTICATION.md](docs/AUTHENTICATION.md).

---

## 🧠 AI & Media Integrations

QuickAI integrates three external service providers:

1. **Google Gemini (via OpenAI SDK Adapter)**:
   - Configured with `baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"` and model `gemini-3.5-flash`.
   - Powers the **AI Article Writer**, **Blog Title Generator**, and **Resume Reviewer**.
   - Dynamically manages output token limits (up to 5,000 tokens for long articles).
2. **Clipdrop Text-to-Image API**:
   - Synthesizes realistic and stylized imagery from text descriptions.
   - Binary buffer responses are converted to Base64 and stored directly in Cloudinary.
3. **Cloudinary**:
   - Hosts generated images permanently.
   - Applies on-the-fly computer vision transformations:
     - Background removal: `{ effect: 'background_removal', background_removal: 'remove_the_background' }`
     - Generative object removal: `{ effect: 'gen_remove:<object>' }`

---

## 🚢 Deployment

- **Frontend**: Deploy `client/` to **Vercel**, **Netlify**, or **Cloudflare Pages** using `npm run build` with output directory `dist`.
- **Backend**: Deploy `server/` to **Render**, **Railway**, or **AWS App Runner** using `npm start`.
- **Database**: Hosted on **Neon Serverless PostgreSQL**.

For environment setup checklists, build configurations, and CORS rules, refer to [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

## 🔮 Future Improvements

*(Planned enhancements distinct from currently implemented functionality)*

- [ ] **Pagination & Search**: Implement cursor-based pagination and search filters on the User Dashboard and Community feed.
- [ ] **Streaming Responses (SSE)**: Add Server-Sent Events (SSE) to stream Gemini article text in real-time as it is generated.
- [ ] **Export Options**: Add one-click export of generated articles and resume reviews to PDF and DOCX formats.
- [ ] **Multi-Format Resume Support**: Extend the resume reviewer to parse Microsoft Word documents (`.docx`).
- [ ] **Rate Limiting**: Introduce Redis-backed IP/user rate limiting (e.g., via Upstash or express-rate-limit) to guard against burst traffic.
- [ ] **Temporary Upload Cleanup**: Add post-processing unlinking (`fs.unlink`) of Multer temporary files to prevent server disk accumulation.
- [ ] **Server-Side Input Sanitization**: Implement backend validation for single-word object removal and strict file MIME-type inspection.

---

## 📄 License

This project is licensed under the **ISC License** as specified in `server/package.json`.

---

## 📚 Documentation Directory

For in-depth guides, see the dedicated documentation files:

- 🏛️ [System Architecture](docs/ARCHITECTURE.md)
- 🔌 [API Documentation](docs/API_DOCUMENTATION.md)
- 🗄️ [Database Design](docs/DATABASE.md)
- 🔐 [Authentication & Security](docs/AUTHENTICATION.md)
- 🛠️ [Environment Setup Guide](docs/ENVIRONMENT_SETUP.md)
- 🚀 [Deployment Guide](docs/DEPLOYMENT.md)
