# Empath — Marketing Website

The marketing site for Empath, a peer support app that matches people going through similar life experiences. The home page is a scroll-driven story ("from signal to connection") that sends visitors to the TestFlight beta; `/terms` and `/privacy` mirror the app's current legal texts.

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
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
    layout.tsx              Root layout, fonts, site metadata
    page.tsx                Home page (the five scroll scenes)
    experience.css          Scroll-scene, phone mock-up and reduced-motion styles
    globals.css             Global styles and Tailwind tokens
    terms/, privacy/        Legal pages (mirror the app's v1.2 texts)
    api/waitlist/route.ts   Waitlist API endpoint
  components/
    experience/
      engine.ts             Scroll engine: writes --p per scene, paints the thread canvas
      experience.tsx        Mounts the canvas and engine
      scenes.tsx            Hero, product stage, connection, reveal, safety, finale
      phone.tsx             Recreated Empath iPhone screens
    navbar.tsx, footer.tsx  Site chrome
    legal-shell.tsx         Shared layout for /terms and /privacy
    waitlist-form.tsx       Email capture form (not currently on the page)
    ui/                     shadcn/ui components
  lib/
    legal-text.ts           Terms and consent text, copied from the app (keep in sync)
    site.ts                 TestFlight link and brand colours
    supabase.ts             Supabase client
```

### Motion and accessibility

Scroll scenes use native scrolling with `position: sticky`; nothing hijacks or snaps the scroll. Each `[data-scene]` gets a `--p` (0–1) custom property and CSS derives transforms from it, so scrolling back reverses everything. With `prefers-reduced-motion: reduce` the scenes collapse into a static layout and the thread stops animating. Without JavaScript every section keeps a solid background and stays readable.
