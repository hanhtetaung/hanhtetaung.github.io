import * as React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Projects from '../../components/projects'

const IndexPage = () => {
    return (
        <main>
            <Navbar />
            <div className="container mx-auto py-16 p-4">
                <Projects />
            </div>
            <Footer/>
        </main>
    )
}

export const Head = () => <title>Portfolio | Projects</title>

export default IndexPage