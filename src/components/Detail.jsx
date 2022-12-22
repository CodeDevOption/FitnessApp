import React from "react";

import bodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  console.log(exerciseDetail);
  const { gifUrl, bodyPart, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="flex flex-col  sm:flex-row gap-14 p-5 items-center">
      <img src={gifUrl} className="flex-1  " alt={name} loading="lazy" />
      <div className="flex-1 flex flex-col gap-5 md:gap-9">
        <h1 className="text-4xl font-semibold">{name}</h1>
        <p className="text-xl">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </p>
        {extraDetail.map((item) => (
          <div key={item.name} className="flex items-center gap-10">
            <button className="bg-[#fff2bd] rounded-md w-28 h-28 flex justify-center items-center">
              <img src={item.icon} alt={item.name} className="w-14 h-14" />
            </button>
            <h4 className="capitalize text-gray-500 font-bold text-2xl">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
