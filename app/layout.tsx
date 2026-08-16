import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'Zelovyn | Personalised Men’s Vitality Protocol',description:'A premium, guided 90-day Ayurvedic wellness protocol for men. Private assessment, personalised guidance and discreet delivery.',metadataBase:new URL('https://www.zelovyn.com')}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
