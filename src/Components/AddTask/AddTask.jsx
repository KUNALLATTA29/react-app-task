import React from 'react'
import { useState } from 'react'

export default function AddTask({addTasks}) {
    const [input, setInput] = useState('')
    const [title, setTitle] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTasks(title, input)
        setInput('')
        setTitle('')
    }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-lg shadow-lg w-full max-w-md transform hover:scale-105 transition-transform duration-300"
    >
      <h2 className="text-2xl font-bold text-white text-center mb-4 tracking-widest">Add New Task</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your title"
        className="border border-transparent focus:border-green-300 bg-white text-gray-800 p-3 rounded w-full mb-3 text-lg shadow-inner focus:ring-2 focus:ring-green-300 transition"
      />
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter the task"
        className="border border-transparent focus:border-green-300 bg-white text-gray-800 p-3 rounded w-full mb-4 text-lg shadow-inner focus:ring-2 focus:ring-green-300 transition resize-none"
        rows="3"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-3 rounded-lg w-full hover:bg-blue-600 transition-colors duration-200 text-lg"
      >
        Add Task
      </button>
    </form>
  )
}
