import * as React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Typography } from "@material-tailwind/react";


const BlogPage = () => {
    return (
        <main>
            <Navbar/>
                <div className='container flex justify-center mx-auto px-4'>
                    <section className='py-20'>
                        <Typography variant='h3'>
                            Coming Soon
                        </Typography>
                    </section>
                </div>
            <Footer />
        </main>
    )
}

export const Head = () => <title>Porfolio | Blog</title>

export default BlogPage