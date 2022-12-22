import React from "react";
import Button from "./Button";
const HeroBanner = () => {
  return (
    <section className="lg:mt-[80px] relative  p-5 mt-[60px] ml-14">
      <h4 className="text-[#FF2625]  font-semibold text-2xl ">Fitness Club</h4>
      <h1 className="font-bold text-[40px] sm:text-[44px]">
        Sweat, smile <br /> and Repeat{" "}
      </h1>
      <p className="text-[22px] leading-9 mb-5">
        Check ou the most effective Exercises <br /> and Repeat{" "}
      </p>
      <Button name="Explore Exercises" color={"#FF2625"} />
      <h1 className="text-center -mt-20 font-bold text-[#ff2625] hidden md:block  leading-none text-[200px] opacity-10">
        Exercise
      </h1>
    </section>
  );
};

export default HeroBanner;
