import React, { useState } from "react";
import { Exercises, HeroBanner, SearchExercises } from "../components";
import BannerImage from "../assets/images/banner.png";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  console.log(exercises);
  return (
    <div className="">
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
      <img
        src={BannerImage}
        alt="Banner"
        className="hidden md:block absolute h-[550px] top-0 right-0 -z-0"
      />
    </div>
  );
};

export default Home;
