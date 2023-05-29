import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faRuler,
  faUserGroup,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function MakeYou() {
  return (
    <section id="make-you">
      <div className="mx-auto w-3/4 text-center">
        <h2 className="text-6xl font-bold uppercase mb-4">
          MAKE <span className="text-stroke">YOU</span> HEALHTY 🥦
        </h2>
        <p>
          Embrace a Transformative Journey of Wellness. Discover the Perfect
          Gymmate, Craft Your Personalized Fitness Program, and Dive into a
          Comprehensive Health Experience. Calculate Your BMI, Track Your
          Progress, and Unleash the Best Version of Yourself, Physically and
          Mentally.
        </p>
      </div>
      <div className="flex mt-6 drop-shadow-md">
        <a href="" className="bg-gray rounded-lg p-6 mr-6 hover:bg-current">
          <FontAwesomeIcon icon={faUserGroup} size="xl" />
          <h3 className="text-3xl mt-2">Find your gymmate</h3>
          <p className="my-4">
            Connect with fitness enthusiasts who will become your trusted
            partners in reaching your goals. From sharing workout routines to
            providing encouragement and accountability, discover the power of
            finding your perfect gymmate to elevate your fitness journey and
            achieve remarkable results.
          </p>
          <p className="text-xl font-bold">
            Join now <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </p>
        </a>
        <a href="" className="bg-gray rounded-lg p-6 mr-6 hover:bg-current">
          <FontAwesomeIcon icon={faPen} size="xl" />
          <h3 className="text-3xl mt-2">Create your own programs</h3>
          <p className="my-4">
            Empower yourself to design a customized fitness regimen that aligns
            with your unique aspirations. From selecting the exercises that suit
            your preferences to setting the pace and tracking your progress,
            creating your own program allows you to tailor every aspect of your
            workout.
          </p>
          <p className="text-xl font-bold">
            Join now <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </p>
        </a>
        <a href="#bmi" className="bg-gray rounded-lg p-6 mr-6 hover:bg-current">
          <FontAwesomeIcon icon={faRuler} size="xl" />
          <h3 className="text-3xl mt-2">Calculate your BMI</h3>
          <p className="my-4">
            Gain insights into your body composition and overall health with our
            easy-to-use BMI calculator. Simply input your height and weight, and
            discover where you stand on the body mass index scale. Understanding
            your BMI can help you set realistic goals, track your progress.
          </p>
          <p className="text-xl font-bold">
            Join now <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </p>
        </a>
      </div>
    </section>
  );
}
