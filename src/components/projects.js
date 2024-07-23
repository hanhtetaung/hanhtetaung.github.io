import * as React from 'react'
import ProjectLink from '../components/project-link'
import { Typography } from "@material-tailwind/react";

const Projects = () => {
    return (
        <section>
            <Typography variant='h4'>Projects & Experience</Typography>
            <br/>

            <ProjectLink link='/projects/hospital-management-system' name='Hospital Management System' language='HTML, CSS, JavaScript, PHP/Laravel, MySQL' />
            <br/>

            <ProjectLink link='/projects/cinema' name='Cinema' language='JavaScript/React' />
            <br />

            <ProjectLink link='/projects/drawing-board' name='Drawing Board' language='JavaSE, Swing' />
            <br />

            <ProjectLink link='/projects/chess-board' name='Chess Board' language='JavaSE' />
            <br />
        </section>
    )
}

export default Projects