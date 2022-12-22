import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import ExerciseCard from "./ExerciseCard";

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div
      className="absolute left-5 top-1/2 z-10 cursor-pointer"
      onClick={() => scrollPrev()}
    >
      <img src={LeftArrowIcon} alt="LeftArrowIcon" />
    </div>
  );
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div
      className="absolute right-5 top-1/2 z-10 cursor-pointer"
      onClick={() => scrollNext()}
    >
      <img src={RightArrowIcon} alt="RightArrowIcon" />
    </div>
  );
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div key={item.id || item}>
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
