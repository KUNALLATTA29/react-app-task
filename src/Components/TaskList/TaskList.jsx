import React from 'react';

export default function TaskList({ tasks, handleRemove, setCurrentTask }) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-extrabold text-pink-600 mb-4 text-center tracking-widest">
        Task List
      </h2>
      <ul className="space-y-4">
        {tasks.map((item) => (
          <li 
            key={item.id} 
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          >
            <h1 className="font-bold text-2xl mb-1">{item.title}</h1>
            <p className="text-lg">{item.content}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold"
              >
                Delete
              </button>
              <button
                onClick={() => setCurrentTask(item)}
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-200 font-semibold"
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
