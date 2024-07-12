import * as React from 'react'
import ProjectLink from '../components/project-link'
import { Typography } from "@material-tailwind/react";

const Projects = () => {
    return (
        <section>
            <Typography variant='h4'>Projects & Experience</Typography>
            <br/>

            <ProjectLink link='/projects/hospital-management-system' name='Hospital Management System' language='Laravel-based' />
            <br/>

            <ProjectLink link='/projects/cinema' name='Cinema' language='React-based' />
            <br />

            <ProjectLink link='/projects/drawing-board' name='Drawing Board' language='Java-based' />
            <br />

            <ProjectLink link='/projects/chess-board' name='Chess Board' language='Java-based' />
            <br />
        </section>
    )
}

export default Projects