import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tyler Schwenk Technical LLC | Full-Stack Software Development",
    template: "%s | Tyler Schwenk Technical LLC"
  },
  description: "Professional full-stack software development services specializing in bioacoustics, machine learning, and wildlife conservation technology. Expert in web, mobile, and embedded systems.",
  keywords: ["software development", "bioacoustics", "machine learning", "full-stack developer", "Tyler Schwenk", "conservation technology", "wildlife monitoring", "React", "Next.js", "iOS development", "Android development", "Python", "TensorFlow", "BirdNET"],
  authors: [{ name: "Tyler Schwenk" }],
  creator: "Tyler Schwenk",
  publisher: "Tyler Schwenk Technical LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tylerschwenktechnical.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tyler Schwenk Technical LLC | Full-Stack Software Development",
    description: "Professional full-stack software development services specializing in bioacoustics, machine learning, and wildlife conservation technology.",
    url: 'https://tylerschwenktechnical.com',
    siteName: 'Tyler Schwenk Technical LLC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logos/el-cap.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tyler Schwenk Technical LLC - Full-Stack Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tyler Schwenk Technical LLC | Full-Stack Software Development",
    description: "Professional full-stack software development services specializing in bioacoustics, machine learning, and wildlife conservation technology.",
    images: ['/logos/el-cap.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tyler Schwenk Technical LLC',
    url: 'https://tylerschwenktechnical.com',
    logo: 'https://tylerschwenktechnical.com/logos/el-cap.jpeg',
    description: 'Professional full-stack software development services specializing in bioacoustics, machine learning, and wildlife conservation technology.',
    founder: {
      '@type': 'Person',
      name: 'Tyler Schwenk',
      jobTitle: 'Full-Stack Software Developer',
    },
    areaServed: 'Worldwide',
    serviceType: ['Software Development', 'Machine Learning', 'Mobile App Development', 'Web Development', 'Conservation Technology'],
    knowsAbout: ['Bioacoustics', 'Machine Learning', 'React', 'Python', 'iOS Development', 'Android Development', 'Cloud Computing', 'Wildlife Conservation'],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
