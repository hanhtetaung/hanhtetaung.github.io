import {
  Navbar,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import {useState, useEffect, createContext} from "react";
import Logo from '../../imgs/robin.png'
import { Link } from "gatsby"
import NavbarItem from "./navbar-item";

export const ActiveLinkContext = createContext();
 
export default function NavbarDefault() {
  const [openNav, setOpenNav] = useState(false);
  const [activePath, setActivePath] = React.useState('');

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, [])

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ActiveLinkContext.Provider value={{activePath, setActivePath}}>
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <NavbarItem name="Home" path="/" />
        <NavbarItem name="Projects" path="/projects/" />
        {/* <NavbarItem name="Logs" path="/logs/" /> */}
      </ul>
    </ActiveLinkContext.Provider>
  );
 
  return (
      <Navbar className="mx-auto rounded-none max-w-full px-4 py-2 lg:px-8 lg:py-4 bg-inherit backdrop-filter-none border-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
            <Link to="/" className="flex items-center" onClick={() => setActivePath("/")} >
              <img src={Logo} className="w-[40px]" alt="Bird-logo" />
            </Link> 
          <div className="hidden lg:block">{navList}</div>
        
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
          </div>
        </Collapse>
      </Navbar>

  );
}