import * as React from 'react'
import Navbar from '../components/navbar'
import TimeLine from '../components/timeline'
import Footer from '../components/footer'
import Contact from '../components/contact'
import { Typography } from "@material-tailwind/react"

const IndexPage = () => {
    return (
        <main>
            <Navbar />
            <div className="container mx-auto px-4">
                <section className='py-16'>
                    <Typography variant='h3'>
                        Hello, I'm Han Htet Aung 
                    </Typography>

                    <Typography variant='lead'>
                    A student of Computer Science, with a specialization in software development
                    </Typography>

                    <br/>

                    <Typography variant="paragraph">
                    As a student, I enjoy in learning fundamental principles of computer science like Computer Organization & Architecture, Operating System,  Programming Languages and Data Structure & Algorithms.
                    </Typography>

                    <br/>

                    <Typography variant='small' className='font-semibold'>Find me on</Typography>
                    <Contact />
                </section>
               
                <section className='pb-16'>
                    <Typography variant='h4'>Stages of Journery</Typography>
                    <br/>
                    <TimeLine />
                </section>
            </div>

            <Footer/>
        </main>
    )
}

export const Head = () => {
    return(
        <>
            <html lang="en" />
            <title>Portfolio</title>
        </>
    )
}

export default IndexPage