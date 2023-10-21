import type { Metadata } from 'next'
import './globals.scss'
import './utility.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Inter } from 'next/font/google'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  generator: 'OwenaHub',
  applicationName: 'OwenaHub',
  title: 'Owenahub - We provide a dynamic platform where passionate learners can seamlessly learn from experienced mentors',
  description: 'We provide a dynamic platform where passionate learners can seamlessly learn from experienced mentors',
  colorScheme: 'dark',
  keywords: ['learn', 'tech', 'code', 'mentor', 'career'],
  creator: 'Ernest Haruna',
  metadataBase: new URL('https://owenahub.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK'
    },
  },
  openGraph: {
    images: '/og-image.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}