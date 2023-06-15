import "./globals.css"
import { Inter } from "next/font/google"
import Particles from "@/components/Particles"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kozocom",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Particles />
      </body>
    </html>
  )
}
