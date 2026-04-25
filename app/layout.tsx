import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { MainNav } from "./components/main-nav";
import "./globals.css";

const siteSans = Plus_Jakarta_Sans({
  variable: "--font-site-sans",
  subsets: ["latin"],
});

const siteDisplay = Fraunces({
  variable: "--font-site-display",
  subsets: ["latin"],
});

const siteMono = JetBrains_Mono({
  variable: "--font-site-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kicscore-website.vercel.app"),
  title: {
    default: "M&S United LLC",
    template: "%s | M&S United LLC",
  },
  description:
    "Business consulting, digital services, and software delivery support for growth-focused teams.",
  keywords: [
    "business consulting",
    "digital services",
    "software solutions",
    "web solutions",
    "New Mexico",
  ],
  openGraph: {
    title: "M&S United LLC",
    description:
      "Strategic and technical services designed to keep business delivery clear, reliable, and scalable.",
    url: "/",
    siteName: "M&S United LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${siteSans.variable} ${siteDisplay.variable} ${siteMono.variable} h-full antialiased`}
    >
      <body className="site-shell">
        <header className="site-header">
          <div className="site-header__inner">
            <Link href="/" className="brand" aria-label="M&S United LLC home">
              <span className="brand__kicker">Business and digital services</span>
              <span className="brand__title">M&S United LLC</span>
              <span className="brand__subtitle">Built for durable partnerships</span>
            </Link>

            <MainNav />
          </div>
        </header>

        <div className="site-main">{children}</div>

        <footer className="site-footer">
          <div className="site-footer__inner">
            <p>Operating from New Mexico, United States.</p>
            <nav className="footer-links" aria-label="Legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
