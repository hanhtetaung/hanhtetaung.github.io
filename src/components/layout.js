
import { Helmet } from "react-helmet"
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout({ children }) {
    return (
        <main>
            <Helmet>
                <html lang="en" />
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#e3eeff" />
                <title>Portfolio</title>
            </Helmet>
            
            <Navbar/>
            <div className='container mx-auto px-4 py-10'>
                {children}
            </div>
            <Footer/>
        </main>
    )
}