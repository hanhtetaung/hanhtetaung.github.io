import * as React from 'react'
import ProjectLink from '../components/project-link'
import { Typography } from "@material-tailwind/react";

const Projects = () => {
    return (
        <section>
            <Typography variant='h4' className='mb-4'>Projects & Experience</Typography>

            <div className='grid lg:grid-cols-2 gap-4'>
                <ProjectLink link='/projects/portfolio' name='Portfolio' technologies='React, Gatsby, Tailwind CSS, Github Actions' />

                <ProjectLink link='/projects/hospital-management-system' name='Hospital Management System' technologies='Bootstrap, AdminLTE, Laravel, MariaDB' />

                <ProjectLink link='/projects/cinema' name='Cinema' technologies='React' />

                <ProjectLink link='/projects/drawing-board' name='Drawing Board' technologies='JavaSE, Swing' />

                <ProjectLink link='/projects/chess-board' name='Chess Board' technologies='JavaSE' />
            </div>
        </section>
    )
}

export default Projects