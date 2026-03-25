# Empath — Waitlist Landing Page

A waitlist landing page for Empath, a peer support app that matches people going through similar life experiences for anonymous, empathetic conversations.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** + shadcn/ui
- **Supabase** for storing waitlist emails
- **Resend** for sending confirmation emails
- **Vercel** for hosting

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key |
| `RESEND_API_KEY` | Your Resend API key |

### 3. Set up Supabase

Run this SQL in your Supabase SQL Editor (Dashboard > SQL Editor > New Query):

```sql
-- Create the waitlist table
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert (but not read/update/delete)
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- (Optional) Allow only authenticated users to read
CREATE POLICY "Allow authenticated reads" ON waitlist
  FOR SELECT USING (auth.role() = 'authenticated');
```

### 4. Set up Resend

1. Create an account at [resend.com](https://resend.com)
2. Add and verify your domain (e.g., `empath.app.co.uk`)
3. Create an API key and add it to `.env.local`
4. Update the `from` address in `src/app/api/waitlist/route.ts` if your domain differs

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Add the three environment variables in the Vercel dashboard
4. Deploy

## Project Structure

```
src/
  app/
    layout.tsx              Root layout
    page.tsx                Landing page
    globals.css             Global styles
    api/waitlist/route.ts   Waitlist API endpoint
  components/
    navbar.tsx              Navigation bar
    hero.tsx                Hero section with email capture
    about.tsx               About/mission sections
    how-it-works.tsx        3-step explanation
    value-props.tsx         4 value propositions
    footer.tsx              Footer with links
    waitlist-form.tsx       Email capture form
    empath-logo.tsx         SVG logo component
    ui/                     shadcn/ui components
  lib/
    supabase.ts             Supabase client
    utils.ts                Utility functions
```

## Images

The `public/images/` directory contains placeholder images for the "How it works" section. Replace them with your own:

- `step-1.jpg` — Person reflecting (Step 1: Tell us what you're going through)
- `step-2.jpg` — Connection/empathy imagery (Step 2: We find your match)
- `step-3.jpg` — Two people talking (Step 3: Start a conversation)
