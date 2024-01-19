import React from "react";

const Img = () => {

  let imgsrc = [];
  let images = [];
  let isSmallScreen = window.innerWidth <= 320;
  let l = 0;
  if (isSmallScreen) {
    l = 10;
  }
  else
  {
    l = 12;

  }

  for (let i = 5; i <= l; i++) {
    imgsrc.push({ src: `../../${i}.jpg` });
  }
  for (let i = 13; i <= 15; i++) images.push({ src: `../../${i}.jpg` });

  return (
    <>
      <div id="imagesection">
      <div className="absolute z-10">
        {imgsrc.map((image, index) => (
          <img
            key={index}
            src={image.src}
            className="h-40 w-auto block p-2 opacity-100 lg:h-80"
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="">
        {images.map((img) => (
          <img
            src={img.src}
            className=" h-80 w-auto p-1 lg:h-auto lg:w-[90%] pl-[8rem] opacity-20"
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default Img;
