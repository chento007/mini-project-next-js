import './globals.css'
import { Inter } from 'next/font/google'
import NavBarComponents from '@/components/NavBar'
import FooterComponents from '@/components/Footer'
import LoadingComponents from '@/components/Loading'
import Script from "next/script";
import { Suspense } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | ISTAD',
  },
  metadataBase: new URL("https://louk-louk.vercel.app"),
  ISO: 200,
  Keywords: "Clothes,Shop,online Shop,discount,",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },

  },
  openGraph: {
    images: "https://api.escuelajs.co/api/v1/files/34e9.webp",
  }

};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBarComponents />
        <Suspense fallback={<LoadingComponents />}>
          <main>
            {children}
          </main>
        </Suspense>
        <FooterComponents />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
