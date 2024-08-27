import React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Typography } from "@material-tailwind/react";

export function GalleryContent({images}) {
 
  const [active, setActive] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const toggleModal = (imageData) => {
    setIsModalOpen(!isModalOpen);
    setActive(imageData)
  };

  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);
 
  return (
    <div className="grid gap-4">
      <Typography variant="lead" className="font-bold">Images</Typography>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {images.map((image, index) => {
          const imageData = getImage(image);

          return (
            <>
              <div
                key={index}
                onClick={() => toggleModal(imageData)}
                >
                <GatsbyImage
                  className="w-full h-full cursor-pointer border border-black "
                  image={imageData}
                  alt={`Content Images ${index + 1}`}
                />
              </div>

              {isModalOpen && (
                <div className="fixed inset-0 z-1 flex items-center justify-center bg-root-color bg-opacity-100" onClick={toggleModal}>
                    <GatsbyImage
                      className="lg:w-4/5 border border-black"
                      objectFit="cover"
                      image={active}
                      alt="nature image"
                    />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}