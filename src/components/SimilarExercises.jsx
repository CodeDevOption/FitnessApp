import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div>
      <h1 className="text-3xl ml-5 sm:text-3xl my-5 font-semibold md:font-bold ">
        Exercises that target the same muscle group
      </h1>
      <div className=" max-w-full  relative  ">
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>

      <h1 className="text-3xl ml-5 my-5 font-semibold md:font-bold ">
        Exercises that target the same muscle group
      </h1>

      <div className="w-full relative ">
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SimilarExercises;
