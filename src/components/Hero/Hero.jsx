import React from "react";
import hero from "../../img/hero.png";

export default function Hero() {
  return (
    <div id="hero" className="flex h-screen items-center">
      <div className="left-hero">
        <h1 className="text-8xl font-bold uppercase mb-4">
          <span className="text-stroke">Time to</span> Step Up Your Game🔥
        </h1>
        <p className="mb-8">
          Embrace the Challenge: Elevate Your Game and Unleash Your Full
          Potential for Unparalleled Success.
        </p>
        <a className="bg-current py-2 px-4 rounded-3xl drop-shadow-lg" href="#make-you">
          Learn more
        </a>
        <a className="ml-5 underline" href="">
          Sign up
        </a>
      </div>
      <div className="right-hero">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}
