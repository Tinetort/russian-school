import './globals.css'
import '../../bootstrap.min.css'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
    title: 'San Diego Russian School',
    description:
        'Discover San Diego Russian School, where children explore the Russian language and culture in a vibrant educational environment. Join us for engaging language lessons, cultural activities, and fun learning experiences.',
        metadataBase: new URL('https://russian-school.vercel.app'),
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} mb-20`}>{children}</body>
        </html>
    )
}
