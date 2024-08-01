import Githublogo from '../../imgs/github-light-logo.png'
import Linkedinlogo from '../../imgs/LI-In-logo.png'
import Leetcodelogo from '../../imgs/Leetcode-logo.png'

import ContactIconButton from "./contact-icon-button";

 
export default function IconButtonRounded() {
  return (
    <div className="flex gap-4">
      <ContactIconButton link={"https://github.com/hanhtetaung"} alt={"Github"} img={Githublogo} />
      <ContactIconButton link={"https://www.linkedin.com/in/han-htet-aung-b2764523a/"} alt={"Linkedin"} img={Linkedinlogo} />
      <ContactIconButton link={"https://leetcode.com/u/juzbird/"} alt={"Leetcode"} img={Leetcodelogo} />
  </div>
  );
}