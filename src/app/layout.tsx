import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
    title: 'Security Logs',
    description: 'SAAS for logs & governance',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
