import * as React from 'react'
import ProjectLink from '../components/project-link'
import { Typography } from "@material-tailwind/react";

const Projects = () => {
    return (
        <section className='py-14'>
            <Typography variant='h4'>Projects & Experience</Typography>
            <br/>

            <ProjectLink link='#' name='Hospital Management System' language='Laravel-based' />
            <br/>

            <ProjectLink link='#' name='Scheduling Management System' language='Spring-based' />
            <br/>

            <ProjectLink link='/projects/cinema' name='Cinema' language='React-based' />
            <br />

            <ProjectLink link='/projects/drawing-board' name='Drawing Board' language='Java-based' />
        </section>
    )
}

export default Projects