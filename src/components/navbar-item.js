
import { Link } from "gatsby"
import { Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { ActiveLinkContext } from "./navbar";

export default function NavbarItem({name, path}) {
    const {activePath, setActivePath} = useContext(ActiveLinkContext)

    return (
        <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex justify-center gap-x-2 font-medium`}
      >
        <Link 
        to={path}
        className={`flex p-1 ${ activePath === path ? 'border-b-2 border-blue-700 text-blue-700' : ''}`}
        onClick={() => setActivePath(path)}
        >
          {name}
        </Link>
      </Typography>
    )
}