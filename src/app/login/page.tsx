"use client";
import { useState } from "react";

const Login = () => {
  const [change, setChange] = useState<boolean>(true);
  return (
    <div className="mt-10 flex justify-center items-center">
      {/* login container */}
      <div className=" bg-white/50  flex rounded-xl shadow-lg max-w-3xl p-5">
        {/* form */}
        {change ? (
          <div className="sm:w-1/2 px-5">
            <h2 className="font-bold text-2xl text-[#002074]">Login</h2>
            <p>Easily log in...</p>
            <form className="flex flex-col gap-4 lg:gap-7">
              <input
                type="text"
                className="p-2 mt-6 rounded-xl border outline-sky-500"
                name="email"
                placeholder="Email"
              />
              <input
                type="password"
                className="p-2  rounded-xl border outline-sky-500"
                name="password"
                placeholder="Password"
              />
              <button className="bg-[#002074] rounded-xl text-white py-2">
                Login
              </button>
            </form>
            <div className="mt-5 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center">OR</p>
              <hr className="border-gray-500" />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-1">
              <p className="text-red-500">Don't have an account?</p>
              <div
                onClick={() => setChange(false)}
                className="bg-[#002074] rounded-xl text-white px-2 py-1 w-full text-center cursor-pointer"
              >
                Register
              </div>
            </div>
          </div>
        ) : (
          <div className="sm:w-1/2 px-5">
            <h2 className="font-bold text-2xl text-[#002074]">Register</h2>
            <p>Easily register...</p>
            <form className="flex flex-col gap-4 lg:gap-7">
              <input
                type="text"
                className="p-2 mt-6 rounded-xl border outline-sky-500"
                name="name"
                placeholder="Name"
              />
              <input
                type="text"
                className="p-2 rounded-xl border outline-sky-500"
                name="email"
                placeholder="Email"
              />
              <input
                type="password"
                className="p-2  rounded-xl border outline-sky-500"
                name="password"
                placeholder="Password"
              />
              <button className="bg-[#002074] rounded-xl text-white py-2">
                Register
              </button>
            </form>
            <div className="mt-5 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center">OR</p>
              <hr className="border-gray-500" />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-1">
              <p className="text-red-500">Have an account?</p>
              <div
                onClick={() => setChange(true)}
                className="bg-[#002074] rounded-xl text-white px-2 py-1 w-full text-center cursor-pointer"
              >
                Login
              </div>
            </div>
          </div>
        )}

        {/* image */}
        <div className=" hidden w-1/2 bg-orange-500/90 rounded-xl sm:flex items-center justify-center">
          <img className="" src="/login.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
