import React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Typography } from "@material-tailwind/react";


export function GalleryContent({images}) {
 
  const [active, setActive] = React.useState(getImage(images[0]));
 
  return (
    <div className="grid gap-4">
      <Typography variant="lead" className="font-bold">Images</Typography>
      
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
        {images.map((image, index) => {
          const imageData = getImage(image);
          return (
            <div
              key={index}
              onClick={() => setActive(imageData)}
            >
              <GatsbyImage
                image={imageData}
                alt={`Content Images ${index + 1}`}
                className="border border-black h-15 md:h-20 max-w-full cursor-pointer"

              />
            </div>
          );
        })}
      </div>

      <div>
        <GatsbyImage
          image={active}
          alt=""
          className="border-2 border-black w-full"
        />
      </div>
    </div>
  );
}