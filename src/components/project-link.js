import { Typography } from "@material-tailwind/react";

export default function ProjectLink({link, name, language}) {
    return (
        <>
            <a href={link} target='_blank'>
                <Typography variant='h6' className='text-blue-700'>{name} &#x1F517;</Typography>
            </a>
            <Typography variant='paragraph'>{language}</Typography>
        </>
    );
}