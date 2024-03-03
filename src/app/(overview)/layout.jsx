import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#ff9161] via-gray-200 to-[#b0dfef] text-[#1f2937]">
            <Navbar />

            <div className="flex-grow">{children}</div>
            
            <Footer />
        </div>
    )
}