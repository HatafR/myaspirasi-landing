import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
})

export const metadata = {
  title: 'MyAspirasi - Ticketing System',
  description: 'Platform manajemen tiket dukungan pelanggan yang dipercaya oleh BPT Komdigi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={jakartaSans.className}>
        {children}
      </body>
    </html>
  )
}