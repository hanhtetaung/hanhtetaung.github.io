import { IconButton } from "@material-tailwind/react";
import Githublogo from '../../imgs/github-light-logo.png'
import Linkedinlogo from '../../imgs/LI-In-logo.png'
import Leetcodelogo from '../../imgs/Leetcode-logo.png'

 
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
        <IconButton variant="text">
          <a href="https://leetcode.com/u/juzbird/" target="_blank">
            <img src={Leetcodelogo} alt="Leetcode" />
          </a>
        </IconButton>

  </div>
  );
}