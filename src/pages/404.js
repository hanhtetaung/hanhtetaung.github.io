import * as React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Typography } from '@material-tailwind/react'


const NotFoundPage = () => {
    return (
        <main>
            <Navbar/>
                <div className='container flex justify-center mx-auto px-4'>
                    <section className='py-20'>
                        <Typography variant='h1'>
                            404
                        </Typography>

                        <Typography variant='subtitle1'>
                            Page Not Found
                        </Typography>
                    </section>
                </div>
            <Footer />
        </main>
    )
}

export default NotFoundPage