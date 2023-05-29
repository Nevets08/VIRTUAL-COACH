import React from "react";
import Program from "../../img/CreateProgram.jpg";

export default function CreateProgram() {
  return (
    <section className="bg-current rounded-2xl flex p-8 relative mt-32" id="program">
      <div className="program-left">
        <h2 className="text-6xl font-bold uppercase mb-4">
          Create Your own <span className="text-stroke"><br />programs</span> 🏋️
        </h2>
        <p className="w-4/6 mb-6">
          Unlock the Power of Personalized Fitness. Tailor your workout routines
          to suit your goals, preferences, and schedule. With the flexibility to
          choose exercises, set durations, and adjust intensity, you can design
          programs that cater to your unique needs. Take charge of your fitness
          journey and experience the satisfaction of achieving results with
          programs crafted by you.
        </p>
        <a className="bg-gray py-2 px-4 rounded-3xl" href="">Create my first program</a>
      </div>
      <div className="program-right">
        <img src={Program} className="w-72 rounded-2xl ml-auto absolute right-8 -top-10" alt="" />
      </div>
    </section>
  );
}
