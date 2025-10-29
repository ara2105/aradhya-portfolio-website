import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aradhya - UI/UX Designer',
  description: 'Creative UI/UX Designer crafting delightful digital experiences',
  keywords: 'UI Designer, UX Designer, Product Designer, Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sf-pro antialiased">
        {children}
      </body>
    </html>
  )
}
