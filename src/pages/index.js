
import TimeLine from '../components/timeline'
import Contact from '../components/contact'
import { Typography } from "@material-tailwind/react"

const IndexPage = () => {
    return (
        <>
             <section>
                <Typography variant='h3'>
                    Hello, I'm Han Htet Aung 
                </Typography>

                <Typography variant='lead'>
                A student of Computer Science, with a specialization in software development
                </Typography>

                <br/>

                <Typography variant="paragraph">
                As a student, I study fundamental principles of computer science, including Computer Organization & Architecture, Operating System, Programming Languages and Data Structure & Algorithms.
                </Typography>

                <br/>

                <Typography variant='small' className='font-semibold'>Find me on</Typography>
                <Contact />
            </section>
            
            <section className='pt-10'>
                <Typography variant='h4'>Stages of Journery</Typography>
                <br/>
                <TimeLine />
            </section>
        </>
    )
}

export default IndexPage