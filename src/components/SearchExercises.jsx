import React, { useEffect, useState } from "react";
import { ExerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [BodyParts, setBodyParts] = useState([]);

  useEffect(()=>{
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',ExerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  },[]);

  const handleSearch = async () => {
    if (searchTerm) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        ExerciseOptions
      );

      const searchedExercise = exerciseData?.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm)
      );
      setSearchTerm("");
      setExercises(searchedExercise);
    }
  };

  return (
    <section className="w-full mt-10 flex flex-col  justify-center items-center">
      <h1 className="font-semibold text-4xl sm:text-5xl text-center">
        Awesome Exercises You <br /> Should Know
      </h1>
      <div className="mt-10  flex justify-center items-center w-3/4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          className="px-6 outline-none flex-1 bg-white py-2 border rounded-md  border-[#0000006c]"
        />
        <button
          onClick={handleSearch}
          className="bg-[#FF2625] hover:bg-[#eeeeee] hover:border hover:text-red-400 hover:border-red-600 text-white font-semibold rounded-md px-6 py-2 ml-2 "
        >
          Search
        </button>
      </div>
      <div className="relative max-w-full mt-20 p-5">
        <HorizontalScrollbar
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          data={BodyParts}
          isBodyParts
        />
      </div>
    </section>
  );
};

export default SearchExercises;
