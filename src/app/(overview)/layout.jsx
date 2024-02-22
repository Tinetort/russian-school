import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex-grow">{children}</div>
            
            <Footer />
        </div>
    )
}