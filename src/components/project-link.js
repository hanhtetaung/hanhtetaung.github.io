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
                    See details &#xa0; &#8702;
                </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}