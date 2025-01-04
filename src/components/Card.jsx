import React from "react";

const Card = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-500">
        <div>
          <h3 className="text-white text-2xl  mt-4 mb-4 ">My ToDo</h3>
        </div>
        <div className="ml-4  mb-4">
          <input
            type="text"
            placeholder="Enter the task"
            className="p-2 rounded-md"
          />
          <input
            type="checkbox"
            className=" ml-8 rounded-full h-5 w-5 cursor-pointer"
          />
        </div>
        <div className="mb-4 rounded-full h-5 w-5 cursor-pointer">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
