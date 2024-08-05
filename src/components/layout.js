
import React from "react"
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout({ children, seotitle }) {
    return (
        <main>
            <html lang="en" />
            {/* <title>Portfolio {seotitle ? `| ${seotitle}` : ''} </title> */}
            <title>Portfolio</title>
            <Navbar/>
            <div className='container mx-auto py-14'>
                {children}
            </div>
            <Footer/>
        </main>
    )
}