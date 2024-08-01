

import { IconButton } from "@material-tailwind/react";

 
export default function ContactIconButton({link, alt, img}) {
  return (
    <a href={link} target="_blank">
        <IconButton variant="text">
            <img src={img} alt={alt} />
        </IconButton>
    </a>
  );
}