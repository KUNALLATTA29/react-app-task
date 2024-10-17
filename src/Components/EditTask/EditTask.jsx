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
    <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your title"
                className="border border-gray-300 p-2 rounded w-full mb-2"
            />
            <br />
            <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter the task"
                className="border border-gray-300 p-2 rounded w-full mb-2"
            />
            <button className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition" type="submit">Update Task</button>
        </form>
  )
}
