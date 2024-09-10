import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'

export default function SessionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body>{children}</body>
      </html>
  )
}
