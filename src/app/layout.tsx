import type { Metadata } from 'next'
import './globals.scss'
import './utility.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const metadata: Metadata = {
  generator: 'OwenaHub',
  applicationName: 'OwenaHub',
  title: 'Owenahub - A vibrant platform for learners to gain career insights from experienced mentors.',
  description: 'We offer a vibrant platform for learners to gain career insights from experienced mentors.',
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