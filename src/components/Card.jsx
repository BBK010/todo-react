import React from "react";
import { useState } from "react";

const Card = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

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
            value={task}
            onChange={handleInputChange}
            className="p-2 rounded-md"
          />
          <input
            type="checkbox"
            className=" ml-8 rounded-full h-5 w-5 cursor-pointer"
          />
        </div>
        <div className="mb-4 rounded-full h-5 w-5 cursor-pointer">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
        <div className="flex flex-col items-center">
          {todos.map((todo, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md mb-3">
              {todo}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
