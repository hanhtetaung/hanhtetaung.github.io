
import ProjectLink from '../components/project-link'
import { Typography } from "@material-tailwind/react";

const Projects = () => {
    return (
        <section>
            <Typography variant='h4' className='mb-4'>Projects & Experience</Typography>

            <div className='grid lg:grid-cols-2 gap-4'>

                <ProjectLink link='/projects/pitch-track' name='PitchTrack' technologies='Node.js, NestJS, MongoDB, Github Actions, AzureVMs' />

                <ProjectLink link='/projects/ticket-tango' name='Ticket Tango' technologies='React, Next.js, MUI, MongoDB, Vercel' />

                <ProjectLink link='/projects/portfolio' name='Portfolio' technologies='React, Gatsby, Tailwind CSS, Github Actions, Github Pages' />

                <ProjectLink link='/projects/hospital-management-system' name='Hospital Management System' technologies='Blade, Bootstrap, Laravel, MariaDB' />


                <ProjectLink link='/projects/drawing-board' name='Drawing Board' technologies='JavaSE, Swing' />

            </div>
        </section>
    )
}

export default Projects