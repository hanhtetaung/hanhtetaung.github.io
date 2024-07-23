import { Typography } from "@material-tailwind/react";
import { Link } from "gatsby"

export default function ProjectLink({link, name, language}) {
    return (
        <>
            <Link to={link}>
                <Typography variant='h6' className='text-blue-700'>{name}</Typography>
            </Link>
            <Typography variant='paragraph'>Technologies: {language}</Typography>
        </>
    );
}