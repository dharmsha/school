import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
// import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ['latin'] });

// 1. Better SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'SchoolYarri - All School Resources',
    template: '%s | SchoolYarri'
  },
  description: 'SchoolYarri is the ultimate platform for all school needs, notes, and resources.',
  keywords: ['school resources', 'notes', 'education', 'SchoolYarri', 'study material'],
  authors: [{ name: 'SchoolYarri Team' }],
  creator: 'SchoolYarri',
  // OpenGraph (Social Media sharing ke liye)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://schoolyarri.com', // Apni domain yahan daalein
    siteName: 'SchoolYarri',
    title: 'SchoolYarri - All School Resources',
    description: 'One platform for all school needs, notes, and resources.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SchoolYarri' }],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'SchoolYarri',
    description: 'One platform for all school needs',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Optimized Theme Script: Bilkul clean aur fast */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('darkMode');
                  var pref = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'true' || (saved === null && pref)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 antialiased`}>
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
        {/* <MobileNav /> */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}