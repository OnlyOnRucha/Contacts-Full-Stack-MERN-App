import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const LogIn = () => {
  <Navbar />;
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="min-h-72 w-3/12 bg-[#F8E8EE] m-10 p-8 rounded-lg shadow-xl flex flex-col gap-2 items-center">
          <form className="flex flex-col gap-3 mt-3 w-11/12 justify-center items-center">
            <input
              className="rounded-xl border-2 p-2 pl-2 w-11/12 placeholder:pl-3"
              type="text"
              placeholder="Username"
            />
            <input
              className="rounded-xl border-2 p-2 pl-2 w-11/12 placeholder:pl-3"
              type="text"
              placeholder="Password"
            />
            <input
              className="rounded-xl border-2 p-2 pl-2 w-11/12 placeholder:pl-3"
              type="text"
              placeholder="Re-enter Password"
            />

            <button className=" py-3 mt-2 w-24 rounded-full border-2 bg-[#f4558f] text-white font-semibold hover:scale-105 transition duration-500 hover:bg-[#fdc3d8] hover:text-[#aa0541]">
              <Link to="/home">Log In</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
