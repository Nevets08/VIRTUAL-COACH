import React from "react";

export default function SignUpForm() {
  return (
    <section>
      <h1 className="text-8xl font-bold uppercase mb-4 text-center">
        <span className="text-stroke">Sign Up</span> & Get Started 💪
      </h1>
      <p className="text-center">Create your account now</p>
      <form className="w-1/2 mx-auto mt-8">
        <div className="flex flex-wrap">
          <div className="w-1/2">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="rounded-3xl border-current border-2 my-2 px-4 py-2 w-11/12"
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="w-1/2">
            <label className="block" htmlFor="firstname">
              Firstname
            </label>
            <input
              className="rounded-3xl border-current border-2 my-2 px-4 py-2 w-full"
              type="text"
              name="firstname"
              id="firstname"
            />
          </div>
        </div>

        <div>
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-3xl border-current border-2 my-2 px-4 py-2 w-full"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div>
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-3xl border-current border-2 my-2 px-4 py-2 w-full"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button className="drop-shadow-lg bg-current py-2 px-4 mt-4 rounded-3xl w-full">
          Sign up
        </button>
        <p className="text-center mt-4">Have an account? <a className="underline" href="/login">Login</a></p>
      </form>
    </section>
  );
}
