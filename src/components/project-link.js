import { Typography } from "@material-tailwind/react";
import { Link } from "gatsby"

export default function ProjectLink({link, name, technologies}) {
    return (
        <>
            <Link to={link}>
                <Typography variant='h6' className='text-blue-700'>{name}</Typography>
            </Link>
            <Typography variant='paragraph'>Technologies: {technologies}</Typography>
        </>
    );
}