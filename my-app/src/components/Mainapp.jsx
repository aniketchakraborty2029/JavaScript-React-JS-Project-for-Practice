import React, { useState } from "react";

export const Mainapp = () => {
  const [bgColor, setBgColor] = useState("bg-red-500");
  const displayColor = () => {
    let color = bgColor.slice(3);
    let rest = color.split("-")[0];
    return rest.charAt(0).toUpperCase() + rest.slice(1);
  };
    console.log(displayColor());
  return (
    <>
      <div className=" relative h-screen  items-center bg-black text-center">
        <h1 className="text-4xl font-bold text-blue-600 py-3">
          Welcome to Colour Changing App
        </h1>
        <p className="mt-2 text-lg text-gray-100">
          Click the button below to change the background color
        </p>
        <div
          className={`h-full  border-gray-200 border-2 overflow-hidden ${bgColor}`}
        >
            {displayColor()}
        </div>
        <div className="py-5 flex rounded-full  absolute transform -translate-x-1/2 left-1/2 -bottom-4 z-10 bg-gray-400/50 px-4 py-2">
          <button className="bg-red-500 px-7 py-4 text-white px-4 py-2 m-2 rounded-full hover:bg-red-700" onClick={()=>setBgColor('bg-red-500')}>
            Red
          </button>
          <button className="bg-red-900 px-7 py-4 text-white px-4 py-2 m-2 rounded-full hover:bg-red-950" onClick = {() => setBgColor('bg-red-900')}>
            Brown
          </button>
          <button className="bg-slate-900 px-7 py-4 text-white px-4 py-2 m-2 rounded-full hover:bg-slate-950" onClick={()=>setBgColor('bg-slate-900')}>
            Slate
          </button>
        </div>
        "
      </div>
    </>
  );
};
