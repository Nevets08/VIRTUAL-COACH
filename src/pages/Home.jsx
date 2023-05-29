import React from "react";
import Hero from "../components/Hero/Hero";
import MakeYou from "../components/MakeYou/MakeYou";
import BMI from "../components/BMI/BMI";
import CreateProgram from "../components/CreateProgram/CreateProgram";
import Navbar from "../components/Navbar/Navbar";
import StartNow from "../components/StartNow/StartNow";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <MakeYou />
        <BMI />
        <CreateProgram />
        <StartNow />
      </main>
    </div>
  );
}
