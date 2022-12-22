import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ExerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(exercises?.length / 9);
  // Invoke when user click to request another page.
  const handlePageChange = (event) => {
    setCurrentPage(event.selected + 1);
    window.scrollTo({ top: 1500, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      if (bodyPart === "all") {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          ExerciseOptions
        );
        setExercises(exercisesData);
      } else {
        const exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          ExerciseOptions
        );
        setExercises(exercisesData);
      }
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div id="exercises" className="w-full mt-14 sm:mt-28 p-5">
      <h1 className="text-2xl font-semibold text-gray-800 mb-5">
        Showing Results
      </h1>
      <div className="flex flex-row flex-wrap gap-12 sm:gap-28 justify-center">
        {exercises
          ?.slice(currentPage - 1, currentPage + 10)
          .map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
      </div>
      <div className="w-full flex justify-center mt-5">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={currentPage - 1}
        />
      </div>
    </div>
  );
};

export default Exercises;
