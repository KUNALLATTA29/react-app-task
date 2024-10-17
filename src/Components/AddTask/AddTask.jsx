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
    <form onSubmit={handleSubmit} >
        <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder='Enter your title'
        className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <br/>
        <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder='Enter the task'
        className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <button className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition" type='submit'>Add Task</button>
    </form>
  )
}
