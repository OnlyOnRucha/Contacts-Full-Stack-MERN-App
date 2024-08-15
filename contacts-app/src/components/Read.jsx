import React, { useState } from "react";

const Read = () => {
  const [users, setUsers] = useState([
    { Name: "Rucha", Email: "jhbfj@gmail.com", Phone: "8745246857" },
    { Name: "Tejas", Email: "vhlsd@gmail.com", Phone: "9489666857" },
  ]);

  return (
    <div className="flex items-center justify-center">
      <div className="min-h-96 w-8/12 bg-[#F9F5F6] m-10 p-8 rounded-lg shadow-xl">
        <div className="flex justify-between mx-4">
          <h1 className="text-xl text-[#aa0541] font-semibold">Contacts</h1>
        </div>
        <div className="grid grid-flow-col grid-cols-1 grid-rows-5 m-3 p-3 pt-1">
          <div className="flex justify-between items-center font-semibold">
            <h1>Name</h1>
            <h1>Email</h1>
            <h1>Phone</h1>
            <h1>Buttons</h1>
          </div>

          {users.map((user) => {
            return(
            <div className="border-y-2 w-full py-3 flex justify-between items-center">
              <h1>{user.Name}</h1>
              <h1>{user.Email}</h1>
              <h1>{user.Phone}</h1>
              <button>del update</button>
            </div>
            )
          })}

          {/*           
          <div className="border-y-2 w-full p-3 flex">1</div>
          <div className="border-b-2 w-full p-3 flex">2</div>
          <div className="border-b-2 w-full p-3 flex">3</div>
          <div className="border-b-2 w-full p-3 flex">4</div> */}
        </div>
      </div>
    </div>
  );
};

export default Read;
