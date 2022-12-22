import React from "react";

const Button = ({ name, color }) => (
  <button className={`bg-[${color}] text-white px-4 py-2 rounded-sm `}>
    {name}
  </button>
);

export default Button;
