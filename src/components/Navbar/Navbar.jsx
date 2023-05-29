import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersRays } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-16">
      <span className="font-bold text-2xl">
        <FontAwesomeIcon icon={faUsersRays} /> VIRTUAL COACH
      </span>
      <div>
        <a className="mx-8" href="">
          FIND GYMMATE
        </a>
        <a className="mx-8" href="">
          CREATE MY PROGRAM
        </a>
        <a className="mx-8" href="">
          CALCULATE MY BMI
        </a>
      </div>
      <div>
        <a
          className="bg-current py-2 px-4 rounded-3xl drop-shadow-lg"
          href="#make-you"
        >
          Sign up
        </a>
        <a className="ml-5 underline" href="">
          Login
        </a>
      </div>
    </nav>
  );
}
