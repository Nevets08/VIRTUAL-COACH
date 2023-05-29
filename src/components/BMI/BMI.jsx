import React, { useState } from "react";
import bmiImg from "../../img/bmi.png";

export default function BMI() {
  const [bmi, setBmi] = useState({ weight: 0, height: 0 });
  const [bmiResult, setBmiResult] = useState();

  const imcCalcul = (height, weight) => {
    if (height < 0 || height.length > 3) {
      return "Not valid!";
    } else {
      const heightCmToM = height * 0.01 * 2;
      const result = weight / heightCmToM;
      return result.toFixed(1);
    }
  };

  const imcOutput = (bmiIndex) => {
    if (bmiIndex <= 0 || bmiIndex > 120) {
      return "Data incorrect!";
    } else {
      if (bmiIndex < 18.5) {
        return "Underweight";
      } else if (bmiIndex > 18.5 && bmiIndex < 24.9) {
        return "Normal weight";
      } else if (bmiIndex > 25 && bmiIndex < 29.9) {
        return "Overweight";
      } else {
        return "Obesity";
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBmiResult(imcCalcul(bmi.height, bmi.weight));
  };
  // LIMIT LENGTH
  const handleChange = (e) => {
    setBmi({ ...bmi, [e.target.name]: e.target.value });
  };

  return (
    <section className="flex items-center" id="bmi">
      <div className="bmi-left">
        <h2 className="text-6xl font-bold uppercase mb-4">
          <span className="text-stroke">Calculate</span> Your BMI 📏
        </h2>
        <p className="w-2/3">
          Gain insights into your body composition and overall health with our
          easy-to-use BMI calculator. Simply input your height and weight, and
          discover where you stand on the body mass index scale.
        </p>
        <form onSubmit={handleSubmit}>
          <label className="mr-2" htmlFor="weight">
            Weight in kg
          </label>
          <input
            onChange={handleChange}
            value={bmi.weight}
            className="rounded-3xl border-current border-2 my-3 mr-6 px-4 py-2"
            type="number"
            name="weight"
            id="weight"
          />
          <label className="mr-2" htmlFor="height">
            Height in cm
          </label>
          <input
            onChange={handleChange}
            value={bmi.height}
            className="rounded-3xl border-current border-2 my-3 mr-6 px-4 py-2"
            type="number"
            name="height"
            id="height"
          />
          <br />
          <p className="font-bold">
            {bmiResult && `Your index is ${bmiResult} ${imcOutput(bmiResult)}`}
          </p>
          <br />
          <button className="drop-shadow-lg	bg-current py-2 px-4 rounded-3xl">
            Calculate
          </button>
        </form>
      </div>
      <div className="bmi-right">
        <img src={bmiImg} className="w-80" alt="" />
      </div>
    </section>
  );
}
