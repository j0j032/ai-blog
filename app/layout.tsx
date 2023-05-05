import './globals.css'
import { Open_Sans } from 'next/font/google'
import Navbar from "@/app/(shared)/Navbar";

const openSans = Open_Sans({
  subsets: ['latin'],
})


export const metadata = {
  title: 'Blog AI App',
  description: 'Blog built with Next.js and Tailwind CSS that uses the OpenAI API to generate content.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
