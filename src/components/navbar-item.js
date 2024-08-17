
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
        className={`flex items-center gap-x-2 p-1 font-medium 
          ${ activePath === path ? 'border-b-2 border-blue-500' : ''}`
        }
      >
        <Link to={path} className="flex items-center" onClick={() => setActivePath(path)}>{name}</Link>
      </Typography>
    )
}