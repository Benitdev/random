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
      <body className={`${inter.className} bg-black/70 relative`}>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <video
            loop
            autoPlay
            muted
            className="h-[125vh] w-full -translate-y-[10%] object-cover opacity-[]"
          >
            <source
              src="/343360377_3471056449830583_5085406489678324657_n.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {children}
        <Particles />
      </body>
    </html>
  )
}
