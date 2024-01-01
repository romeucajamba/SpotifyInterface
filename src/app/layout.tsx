import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SpotifyInterface',
  description: 'Clonning Spotfy Interface',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-zinc-900 text-zinc-50">
      <body>{children}</body>
    </html>
  )
}
