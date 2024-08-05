
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout({ children }) {
    return (
        <main>
            <html lang="en" />
            <title>Portfolio</title>
            <Navbar/>
            <div className='container mx-auto py-10'>
                {children}
            </div>
            <Footer/>
        </main>
    )
}