import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Card = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (task.trim() === "") return;
    setTodos([{ id: Date.now(), text: task }, ...todos]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-500">
        <div>
          <h3 className="text-white text-2xl  mt-4 mb-4 ">My ToDo</h3>
        </div>
        <div className="flex gap-3 w-full max-w-2xl">
          <input
            type="text"
            placeholder="Enter the task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            onClick={handleSubmit}
            disabled={!task.trim()}
            className="whitespace-nowrap bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>

        <div className="w-full max-w-xl">
          {todos.length === 0 ? (
            <p className="text-gray-400 text-center">No tasks added yet. 📜</p>
          ) : (
            <div className="color-white mt-5">
              {todos.map((todo, index) => (
                <div
                  key={todo.id}
                  className="bg-gray-800 text-white p-3  mt-5 rounded-lg flex justify-between items-center shadow-md"
                >
                  <span className="font-semibold text-lg">
                    {index + 1}. {todo.text}
                  </span>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                  >
                    <FaTrash /> {/* Trash Bin Icon */}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
