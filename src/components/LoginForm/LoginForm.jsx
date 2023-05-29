import React from "react";

export default function Login() {
  return (
    <section>
      <h1 className="text-8xl font-bold uppercase mb-4 text-center">
        <span className="text-stroke">Login</span> & Welcome Back🤩
      </h1>
      <p className="text-center">Login to your account</p>
      <form className="w-1/2 mx-auto mt-8">
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
          Login
        </button>
        <p className="text-center mt-4">Dont Have an account? <a className="underline" href="/signup">Sign up</a></p>
      </form>
    </section>
  );
}
