import React, { useState } from "react";
import sun from "../img/sun.png";
import rain from "../img/rain.png";
import partlycloud from "../img/partlycloud.png";
import snow from "../img/snow.png";
import cloud from "../img/cloud.png";
import drizzle from "../img/drizzle.png";
import fog from "../img/fog.png";
import smoke from "../img/smoke.png";
import haze from "../img/haze.png";
function Temperature({ setCity, stats }) {
  const [ct, setct] = useState(" ");
  const handlecitychange = (e) => {
    console.log(e.target.value);
    setct(e.target.value);
  };
  const search = (e) => {
    e.preventDefault();
    console.log(e);
    setCity(ct);
    check();
  };
  return (
    <>
      <div className="flex justify-between  p-2 font-mono w-full">
        <div>
          <input
            type="text"
            placeholder="Enter City"
            className=" w-72 bg-[#334054] text-slate-200 rounded-2xl p-2  outline-none focus:border-none"
            onChange={handlecitychange}
          />
        </div>
        <div className="mx-4 mt-1">
          <button onClick={search}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="White"
              className="w-7 h-7 text-transform scale-100 hover:scale-125  transition-transform  duration-300 ease-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*  Weather */}
      <div className=" flex justify-center mt-4 ">
        {stats.cond === "Clear" ? (
          <img src={sun} alt="sun" srcset="" className="w-16 h-16" />
        ) : stats.cond === "Clouds" ? (
          <img src={cloud} alt="" className="w-16 h-16" />
        ) : stats.cond === "Rain" ? (
          <img src={rain} alt="" className="w-16 h-16" />
        ) : stats.cond === "Mist" ? (
          <img src={fog} alt="" className="w-16 h-16" />
        ) : stats.cond === "Scattred clouds" ? (
          <img src={partlycloud} alt="" className="w-16 h-16" />
        ) : stats.cond === "Snow" ? (
          <img src={snow} alt="" className="w-16 h-16" />
        ) : stats.cond === "Smoke" ? (
          <img src={smoke} alt="" className="w-16 h-16" />
        ) : stats.cond === "Haze" ? (
          <img src={haze} alt="" className="w-16 h-16" />
        ) : stats.cond==="Drizzle"?(
          <img src={drizzle} alt="" className="w-16 h-16" />
        ):null}
      </div>
      <div className="   justify-center font-mono items-center mt-6 text-slate-200">
        <p className=" text-center text-[50px] text-transfrom scale-100 hover:scale-110 transition-transform duration-500 ease-in-out">
          {stats.temp}
        </p>
        <p className=" text-center text-[45px] text-transform scale-100 hover:scale-110  transition-transform  duration-300 ease-out">
          {" "}
          {stats.cond}
        </p>
        <p className=" text-center text-[10px] text-red-400">
          {" "}
          {stats.location}
        </p>
      </div>
    </>
  );
}

export default Temperature;
