import * as React from 'react'
import ProjectLink from '../components/project-link'
import { Typography } from "@material-tailwind/react";

const Projects = () => {
    return (
        <section>
            <Typography variant='h4'>Projects & Experience</Typography>
            <br/>

            <ProjectLink link='/projects/hospital-management-system' name='Hospital Management System' technologies='Bootstrap, AdminLTE, Laravel, MariaDB' />
            <br/>

            <ProjectLink link='/projects/cinema' name='Cinema' technologies='React' />
            <br />

            <ProjectLink link='/projects/drawing-board' name='Drawing Board' technologies='JavaSE, Swing' />
            <br />

            <ProjectLink link='/projects/chess-board' name='Chess Board' technologies='JavaSE' />
            <br />
        </section>
    )
}

export default Projects