
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout({ children }) {
    return (
        <main>
            <html lang="en" />
            <title>Portfolio</title>
            <meta name="theme-color" content="#e3eeff" />
            <Navbar/>
            <div className='container mx-auto px-4 py-10'>
                {children}
            </div>
            <Footer/>
        </main>
    )
}