import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Detail, ExerciseVideos, SimilarExercises } from "../components";
import { ExerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exercisesVideos, setExercisesVideos] = useState([]);
  const [TargetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [EquipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        ExerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      console.log(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData?.name}`,
        youtubeOptions
      );
      setExercisesVideos(exerciseVideosData.contents);
      console.log(exerciseVideosData);

      const targetMuscleExercises = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        ExerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercises);

      const equipmentExercises = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        ExerciseOptions
      );
      setEquipmentExercises(equipmentExercises);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exercisesVideos={exercisesVideos}
        name={exerciseDetail?.name}
      />
      <SimilarExercises
        targetMuscleExercises={TargetMuscleExercises}
        equipmentExercises={EquipmentExercises}
      />
    </div>
  );
};

export default ExerciseDetail;
