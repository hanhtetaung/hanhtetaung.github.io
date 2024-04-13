import { IconButton } from "@material-tailwind/react";
import Githublogo from '../../imgs/github-light-logo.png'
import Linkedinlogo from '../../imgs/LI-In-logo.png'

 
export default function IconButtonRounded() {
  return (
    <div className="flex gap-4">
        <IconButton variant="text">
            <img src={Githublogo} alt="Github" />
        </IconButton>
        <IconButton variant="text">
            <img src={Linkedinlogo} alt="Github" />
        </IconButton>
  </div>
  );
}