import type { Metadata } from 'next'
import { EB_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

import Header from "@/components/header/header";

const ebGaramond = EB_Garamond({ subsets: ['latin'], display: 'swap', variable: '--font-eb-garamond' });
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Harvesting Wisdom with Mike McMahon',
  description: 'Podcast Series',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
