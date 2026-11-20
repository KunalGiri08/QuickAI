# QuickAI Local Environment Setup Guide

This guide walks you through setting up and running **QuickAI** on your local machine for development and testing.

---

## 1. Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.x` or `v20.x` or higher
- **npm**: `v9.x` or higher (or `pnpm` / `yarn`)
- **Git**: Latest version

---

## 2. External Service Credentials

QuickAI relies on several managed cloud services. Before running the application, set up free or developer accounts on each platform to acquire the necessary API keys:

### 2.1 Clerk Authentication & Billing
1. Sign in to [Clerk Dashboard](https://dashboard.clerk.com).
2. Create a new application (e.g., `QuickAI`).
3. Under **Configure > API Keys**, copy:
   - **Publishable Key** (starts with `pk_test_...` or `pk_live_...`)
   - **Secret Key** (starts with `sk_test_...` or `sk_live_...`)
4. To test premium features locally:
   - Under Clerk's **Plans** or organization metadata, configure a plan with slug `premium`.
   - Alternatively, update a test user's plan assignment or private metadata in the Clerk Dashboard.

### 2.2 Neon Serverless PostgreSQL
1. Sign up at [Neon Console](https://console.neon.tech).
2. Create a new PostgreSQL project (e.g., `quickai-db`).
3. In your project dashboard, copy the connection string:
   ```
   postgresql://[user]:[password]@[endpoint].neon.tech/[dbname]?sslmode=require
   ```
4. Open the Neon **SQL Editor** and run the table creation script:
   ```sql
   CREATE TABLE IF NOT EXISTS creations (
       id SERIAL PRIMARY KEY,
       user_id VARCHAR(255) NOT NULL,
       prompt TEXT NOT NULL,
       content TEXT NOT NULL,
       type VARCHAR(50) NOT NULL,
       publish BOOLEAN DEFAULT FALSE,
       likes TEXT[] DEFAULT ARRAY[]::TEXT[],
       created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );
   ```

### 2.3 Google Gemini API
1. Visit [Google AI Studio](https://aistudio.google.com/).
2. Create an API Key. QuickAI connects to Google's OpenAI-compatible endpoint using model `gemini-3.5-flash`.

### 2.4 Clipdrop API
1. Create an account at [Clipdrop Developer Portal](https://clipdrop.co/apis).
2. Generate an API Key for text-to-image synthesis.

### 2.5 Cloudinary
1. Sign up at [Cloudinary](https://cloudinary.com).
2. In your Cloudinary Dashboard, locate:
   - **Cloud Name**
   - **API Key**
   - **API Secret**
3. Ensure that AI Transformations (Background Removal and Generative Remove) are enabled on your Cloudinary account.

---

## 3. Clone and Repository Navigation

```bash
# Clone the repository
git clone https://github.com/your-username/quickai.git

# Navigate into the project root
cd quickai
```

---

## 4. Backend Setup (`/server`)

### 4.1 Install Server Dependencies
```bash
cd server
npm install
```

### 4.2 Configure Server Environment Variables
Create a `.env` file in the `server` directory:

```bash
cp .env.example .env
```

Populate `server/.env` with your actual service credentials:

```ini
PORT=3000
DATABASE_URL=postgresql://username:password@ep-sample-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
GEMINI_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLIPDROP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4.3 Start Server in Development Mode
```bash
npm run dev
```

The server will launch with `nodemon` on `http://localhost:3000`:
```text
Server is running on port 3000
```
Verify the health check endpoint by opening `http://localhost:3000/` in your browser. You should see `"Server is Live!"`.

---

## 5. Frontend Setup (`/client`)

Open a new terminal window:

### 5.1 Install Client Dependencies
```bash
cd client
npm install
```

### 5.2 Configure Client Environment Variables
Create a `.env` file in the `client` directory:

```bash
cp .env.example .env
```

Populate `client/.env`:

```ini
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
VITE_BASE_URL=http://localhost:3000
```

### 5.3 Start Client in Development Mode
```bash
npm run dev
```

Vite will start the client dev server (typically at `http://localhost:5173`).

---

## 6. Verification Checklist

1. **Landing Page**: Open `http://localhost:5173`. The landing page should render with hero section, tool cards, testimonials, and the Clerk pricing table.
2. **Authentication**: Click **Get started** or **Start creating now**. The Clerk modal will appear. Sign up or log in.
3. **Dashboard Navigation**: After login, navigate to the `/ai` route. The user profile and avatar should appear in the sidebar.
4. **Text Generation Test**: Navigate to **Write Article** (`/ai/write-article`), input a topic, and click **Generate article**. Verify that markdown content renders on the right panel.
5. **Database Entry**: Check the `creations` table in Neon SQL Editor to verify the newly inserted row.

---

## 7. Troubleshooting

| Issue | Cause | Solution |
|---|---|---|
| `Cannot find module '@clerk/express'` | Dependencies not installed in `/server` | Run `npm install` inside the `server/` directory. |
| `NeonDbError: connect ECONNREFUSED` or SSL error | Missing `?sslmode=require` in `DATABASE_URL` | Ensure your Neon connection string contains `?sslmode=require`. |
| `ClerkClient: Missing publishableKey` | `VITE_CLERK_PUBLISHABLE_KEY` is undefined | Ensure `.env` exists in `/client` and starts with `VITE_`. Restart the Vite dev server. |
| `401 Unauthorized` on `/api/*` | Missing or expired Bearer token | Confirm you are signed in on the frontend and that `useAuth().getToken()` resolves successfully. |
| `Clipdrop API 402/403` | Exhausted API credits or invalid key | Check credit balance in the Clipdrop developer portal. |
| `Cloudinary invalid credentials` | Incorrect cloud name, key, or secret | Double-check credentials in `server/.env`. |
