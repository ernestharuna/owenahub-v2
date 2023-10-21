import type { Metadata } from 'next'
import './globals.scss'
import './utility.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Inter } from 'next/font/google'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Owenahub | The Learners Hub',
  description: 'Connecting enthusiastic learners with profeessionals in tech',
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