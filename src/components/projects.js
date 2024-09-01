
import ProjectLink from '../components/project-link'
import { Typography } from "@material-tailwind/react";

const Projects = () => {
    return (
        <section>
            <Typography variant='h4' className='mb-4'>Projects & Experience</Typography>

            <div className='grid lg:grid-cols-2 gap-4'>

                <ProjectLink link='/projects/portfolio' name='Portfolio' technologies='React, Gatsby, Material Tailwind, Github Actions' />

                <ProjectLink link='/projects/hospital-management-system' name='Hospital Management System' technologies='Blade, Bootstrap, AdminLTE, Laravel, MariaDB' />

                <ProjectLink link='/projects/ticket-tango' name='Ticket Tango' technologies='React, Next.js, MUI, MongoDB' />

                <ProjectLink link='/projects/drawing-board' name='Drawing Board' technologies='JavaSE, Swing' />

            </div>
        </section>
    )
}

export default Projects