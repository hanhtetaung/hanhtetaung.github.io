import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

import { Link } from "gatsby"

export default function ProjectLink({link, name, technologies}) {
    return (
        <Card className="rounded-none border-black border-2">
            <CardBody className="pb-4">
                <Typography variant="h5" color="blue-gray" className="">
                {name}
                </Typography>
                <Typography className="text-black">
                Technologies: {technologies}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to={link} className="inline-block">
                <Button size="sm" variant="text" className="flex items-center gap-2 text-blue-600">
                    See details
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                    </svg>
                </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}