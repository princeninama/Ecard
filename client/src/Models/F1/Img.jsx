import React from "react";

const Img = () => {
  let imgsrc = [];
  let images = [];
  let isSmallScreen = window.innerWidth <= 320;
  let l = isSmallScreen ? 7 : 9;

  for (let i = 2; i <= l; i++) {
    imgsrc.push({ src: `../../../${i}.jpg`, alt: `Image ${i}` });
  }
  for (let i = 13; i <= 15; i++) {
    images.push({ src: `../../../${i}.jpg`, alt: `Image ${i}` });
  }

  return (
    <div id="imagesection" className="flex justify-between relative">
      <div className="flex flex-col items-center">
        {imgsrc.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-40 w-auto lg:h-80  opacity-100"
          />
        ))}
      </div>
      <div className="flex flex-col items-center w-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="h-full w-full lg:h-full lg:w-[98%]"
          />
        ))}
      </div>
    </div>
  );
};

export default Img;
