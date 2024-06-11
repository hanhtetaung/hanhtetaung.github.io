import { IconButton } from "@material-tailwind/react";
import Githublogo from '../../imgs/github-light-logo.png'
import Linkedinlogo from '../../imgs/LI-In-logo.png'

 
export default function IconButtonRounded() {
  return (
    <div className="flex gap-4">
        <IconButton variant="text">
          <a href="https://github.com/hanhtetaung" target="_blank">
            <img src={Githublogo} alt="Github" />
          </a>
        </IconButton>
        <IconButton variant="text">
          <a href="https://www.linkedin.com/in/han-htet-aung-b2764523a/" target="_blank">
            <img src={Linkedinlogo} alt="Linkedin" />
          </a>
        </IconButton>
  </div>
  );
}