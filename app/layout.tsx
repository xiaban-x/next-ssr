import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Next SSR - 现代化的服务端渲染应用',
    template: '%s | Next SSR',
  },
  description: '基于Next.js构建的高性能服务端渲染应用，提供优秀的用户体验和SEO优化。',
  keywords: ['Next.js', 'React', 'SSR', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Next SSR Team' }],
  creator: 'Next SSR Team',
  publisher: 'Next SSR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://next-ssr.example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://next-ssr.example.com',
    title: 'Next SSR - 现代化的服务端渲染应用',
    description: '基于Next.js构建的高性能服务端渲染应用，提供优秀的用户体验和SEO优化。',
    siteName: 'Next SSR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next SSR - 现代化的服务端渲染应用',
    description: '基于Next.js构建的高性能服务端渲染应用，提供优秀的用户体验和SEO优化。',
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
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
