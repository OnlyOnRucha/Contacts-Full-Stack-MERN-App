import React from "react";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="min-h-96 w-4/12 bg-[#F8E8EE] m-10 p-8 rounded-lg shadow-xl flex flex-col gap-2 items-center">
          <h1 className=" mt-2 text-3xl text-[#e83476] font-semibold">Add New Contact</h1>
          <form className="flex flex-col gap-3 mt-6 w-11/12 justify-center items-center">
            <input className="rounded-xl border-2 p-2 pl-2 w-9/12 placeholder:pl-3" type="text" placeholder="Jane Doe"/>
            <input className="rounded-xl border-2 p-2 pl-2 w-9/12 placeholder:pl-3" type="text" placeholder="janedoe@gmail.com"/>
            <input className="rounded-xl border-2 p-2 pl-2 w-9/12 placeholder:pl-3" type="text" placeholder="9757465287"/>
            <button className=" py-3 mt-2 w-24 rounded-full border-2 bg-[#f4558f] text-white font-semibold hover:scale-105 transition duration-500 hover:bg-[#fdc3d8] hover:text-[#aa0541]">
              <Link to="/read">
              Save
              </Link>
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
