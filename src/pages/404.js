import * as React from 'react'
import { Typography } from '@material-tailwind/react'

import Layout from '../components/layout'


const NotFoundPage = () => {
    return (
        <Layout seotitle={'Not Found'}>
            <section className='text-center'>
                <Typography variant='h1'>
                    404
                </Typography>

                <Typography variant='small'>
                    Page Not Found
                </Typography>
            </section>
        </Layout>
    )
}

export default NotFoundPage