import React from "react";

const ExerciseVideos = ({ exercisesVideos, name }) => {
  if (!exercisesVideos.length) return <h1>Loading....</h1>;
  return (
    <div className="flex flex-col  sm:mt-32 items-center justify-center mt-5 w-full">
      <h1 className="ml-5 text-3xl md:text-4xl font-bold">
        Watch <span className="text-[#ff2625]">{name}</span> exercises Videos
      </h1>
      <div className="flex flex-wrap items-center justify-center mt-5 gap-5 w-full ">
        {exercisesVideos.slice(0, 8).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="w-2/3 sm:w-64 flex flex-col gap-2 shadow-md rounded-md overflow-hidden backdrop:blur-sm hover:scale-105 transition-all duration-200 ease-in-out  pb-2"
          >
            <img
              src={item?.video?.thumbnails[0]?.url}
              alt={item?.video?.title}
              loading="lazy"
            />
            <div className="flex flex-col">
              <h2 className="ml-2 text-md font-semibold">
                {item?.video?.title}
              </h2>
              <p className="ml-2 mt-2 text-sm font-medium">
                {item?.video?.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
