import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="border-red-300 border-2 rounded-md shadow-md max-w-[300px]"
      to={`/exercise/${exercise?.id}`}
    >
      <img src={exercise?.gifUrl} alt={exercise?.name} loading="lazy" />
      <div className="flex ">
        <button className="ml-6 text-white bg-[#ffa9a9] px-4  py-2 text-sm rounded-3xl capitalize">
          {exercise?.bodyPart}
        </button>
        <button className="ml-6 text-white bg-[#fcc757] px-4  py-2 text-sm rounded-3xl capitalize">
          {exercise?.target}
        </button>
      </div>
      <h1 className="ml-5 text-gray-800 font-bold mt-3 pb-3 capitalize sm:text-xl text-lg ">
        {exercise?.name}
      </h1>
    </Link>
  );
};

export default ExerciseCard;
