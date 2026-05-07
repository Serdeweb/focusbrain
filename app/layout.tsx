import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Focus Brain Therapy | Neurological Rehabilitation in Davie, FL',
  description:
    "South Florida's first personalized brain therapy center. Specializing in concussions, dementia, stroke recovery, and cognitive rehabilitation. We accept Medicare and most insurance.",
  openGraph: {
    title: 'Focus Brain Therapy',
    description: "South Florida's first personalized brain therapy center.",
    url: 'https://focusbraintherapy.com',
    siteName: 'Focus Brain Therapy',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
