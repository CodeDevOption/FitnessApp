import React from "react";
import Icon from "../assets/icons/gym.png";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1300, left: 100, behavior: "smooth" });
      }}
      className={` ${
        bodyPart === item && "border-t-4 border-[#FF2625]"
      } hover:bg-red-100   flex justify-center flex-col items-center w-[270px] h-[280px] hover:scale-110 transition-all duration-200 ease-in-out`}
    >
      <img src={Icon} alt="dumbbell" className="w-[40px] h-[40px]" />
      <h1 className="text[24px] font-bold text-[#3A1212] capitalize mt-5">
        {item}
      </h1>
    </div>
  );
};

export default BodyPart;
