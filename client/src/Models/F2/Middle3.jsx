import React, { useEffect, useState } from "react";
import "./../../css/heart.css";
const Middle3 = ({data}) => {
  const [currentSlide, setcurrentSlide] = useState(0);

  const text1 = [
   `${data.invitedBy}`
  ];
  const text2 = [
    "Mr Nileshbhai Ninama ",
    "Mrs. Kalaben Ninama ",
    "Mr Sunilbhai Ninama",
    "Ms. Nikubhai Ninama",
  ];
  const text3 = [
    "Mr Surjibhai Ninama ",
    "Mrs. Babuben Ninama ",
    "Mr Nitinbhai Ninama",
    "Ms. Vipulbhai Ninama",
  ];
  const text4 = [
    "Mr Jagdishbhai Ninama ",
    "Mrs. Komalben Ninama ",
    "Ms. Hitaishee Ninama",
    "Mr Prince Ninama",
  ];

  const allTexts = [text1, text2, text3, text4];

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentSlide((prev) => (prev + 1) % allTexts.length);
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="h-screen bg-gradient-to-t from-yellow-100 via-orange-200 to-purple-300 ">
        <div className="pl-72  pt-40">
          <p
            className="text-black items-center bg-white text-4xl border p-6 h-64 w-[53rem] rounded-tl-3xl rounded-br-2xl font-bold"
            id="slider"
          >
            "Join us in celebrating the union of Tejas and Twinkal, as two
            hearts become one. Your presence is the greatest gift as our
            families come together in love and joy. Please grace us with your
            company on this special day."
          </p>
        </div>
        <div className="text-center pt-10">
          {allTexts[currentSlide].map((item, index) => (
            <p key={index} className="text-3xl p-1" id="bo">
              {item}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Middle3;
