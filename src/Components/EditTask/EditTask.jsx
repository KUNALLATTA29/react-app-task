import React, { useState, useEffect } from 'react'

export default function EditTask({currentTask, setCurrentTask, updateTask}) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(()=>{
        if(currentTask){
            setTitle(currentTask.title)
            setContent(currentTask.content)

        }
    },[currentTask])
    const handleSubmit = (e)=>{
        e.preventDefault();
        updateTask(currentTask.id, title, content);
        setCurrentTask(null);
    }

  return (
    <form 
    onSubmit={handleSubmit} 
    className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg w-full max-w-md transform hover:scale-105 transition-transform duration-300"
  >
    <h2 className="text-2xl font-bold text-white text-center mb-4 tracking-wide">Edit Task</h2>
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Enter your title"
      className="border border-transparent focus:border-blue-300 bg-white text-gray-800 p-3 rounded w-full mb-3 text-lg shadow-inner focus:ring-2 focus:ring-blue-300 transition"
    />
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Enter the task"
      className="border border-transparent focus:border-blue-300 bg-white text-gray-800 p-3 rounded w-full mb-4 text-lg shadow-inner focus:ring-2 focus:ring-blue-300 transition resize-none"
      rows="3"
    />
    <button
      type="submit"
      className="bg-green-500 text-white font-semibold py-3 rounded-lg w-full hover:bg-green-600 transition-colors duration-200 text-lg"
    >
      Update Task
    </button>
  </form>
  )
}
