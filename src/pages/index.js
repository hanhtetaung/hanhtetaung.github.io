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

                    <Typography variant='h5'>
                    A student of Computer Science, with a specialization in software development
                    </Typography>

                    <br/>

                    <Typography variant="paragraph">
                    As a student, I enjoy in learning fundamental principles of computer science like Computer Organization & Architecture, Operating System,  Programming Languages and Data Structure & Algorithms.
                    </Typography>

                    <br/>

                    <Typography variant="paragraph">
                    As a developer, I use Java building enterprise solution to get robust performance and strong ecosystem. I use NodeJS and PHP to build web application for simplicity and ease of use. I tried Golang to build a scalable and reliable software.
                    </Typography>

                    <br/>

                    <Typography variant='h6'>Find me on</Typography>
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

export const Head = () => <title>Porfolio</title>

export default IndexPage