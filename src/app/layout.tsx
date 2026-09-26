import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const title = "Empath — Peer Support, Matched by AI";
const description =
  "Empath connects you with someone who truly gets what you're going through. Not a therapist. Not a bot. A real person, matched by AI.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.empathapp.co.uk"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Empath",
    locale: "en_GB",
    title,
    description,
    images: [{ url: "/images/empath-logo.png", width: 8354, height: 2550, alt: "Empath" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/empath-logo.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-white font-body">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
