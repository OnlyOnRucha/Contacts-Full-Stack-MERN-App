import React from "react";

const Read = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="min-h-96 w-7/12 bg-[#F9F5F6] m-10 p-8 rounded-lg shadow-xl">
        <div className="flex justify-between mx-4">
          <h1 className="text-xl text-[#aa0541] font-semibold">Contacts</h1>
        </div>
        <div className="grid grid-flow-col grid-cols-1 grid-rows-5 m-3 p-3">
          <div className="border-y-2 w-full p-3 flex">1</div>
          <div className="border-b-2 w-full p-3 flex">2</div>
          <div className="border-b-2 w-full p-3 flex">3</div>
          <div className="border-b-2 w-full p-3 flex">4</div>
          <div className="border-b-2 w-full p-3 flex">5</div>
        </div>
      </div>
    </div>
  );
};

export default Read;
