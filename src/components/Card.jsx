import { useState } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa"; // Import Icons

const Card = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null); // Track task being edited
  const [editText, setEditText] = useState(""); // Store edited text

  // Handle input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Add a new task
  const handleSubmit = () => {
    if (task.trim() === "") return;
    setTodos([{ id: Date.now(), text: task }, ...todos]);
    setTask("");
  };

  // Delete a task
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Enable edit mode
  const handleEdit = (id, text) => {
    setEditId(id); // Set task ID being edited
    setEditText(text); // Set current text in input field
  };

  // Save the edited task
  const handleSaveEdit = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null); // Exit edit mode
    setEditText(""); // Clear edit input field
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 min-h-screen p-4">
      <h3 className="text-white text-3xl font-semibold mb-6">
        📌 My To-Do List
      </h3>

      {/* Input and Add Button */}
      <div className="flex gap-3 w-full max-w-xl mb-4">
        <input
          type="text"
          placeholder="Enter the task..."
          value={task}
          onChange={handleInputChange}
          className="flex-1 p-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSubmit}
          disabled={!task.trim()}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <div className="w-full max-w-xl">
        {todos.length === 0 ? (
          <p className="text-gray-400 text-center">No tasks added yet. 📜</p>
        ) : (
          <div className="space-y-3">
            {todos.map((todo, index) => (
              <div
                key={todo.id}
                className="bg-gray-800 text-white p-3 rounded-lg flex justify-between items-center shadow-md"
              >
                {/* If in edit mode, show input field */}
                {editId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 p-2 bg-gray-700 text-white border border-gray-500 rounded-md focus:outline-none"
                  />
                ) : (
                  <span className="font-semibold text-lg">
                    {index + 1}. {todo.text}
                  </span>
                )}

                {/* Action Buttons (Edit, Save, Delete) */}
                <div className="flex gap-2">
                  {editId === todo.id ? (
                    <button
                      onClick={handleSaveEdit}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                    >
                      <FaSave /> {/* Save Icon */}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(todo.id, todo.text)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                    >
                      <FaEdit /> {/* Edit Icon */}
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                  >
                    <FaTrash /> {/* Trash Bin Icon */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
