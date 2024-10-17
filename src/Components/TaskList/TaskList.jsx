import React from 'react';

export default function TaskList({ tasks, handleRemove, setCurrentTask }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Task List</h2>
      <ul className="list-disc pl-5">
        {tasks.map((item) => (
          <li key={item.id} className="bg-gray-50 p-4 rounded shadow mb-2">
            <h1 className="font-bold text-xl">{item.title}</h1>
            <p>{item.content}</p>
            <div className="mt-2">
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white p-2 rounded mr-2 hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button
                onClick={() => setCurrentTask(item)}
                className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
