import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head' // Import Head from next/head
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kisan Ka Link',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <Head>
        <link rel="icon" href="logoCC.jpg" type="image/jpg" />
        {/* <title>{metadata.title}</title> */}
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
