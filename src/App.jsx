import React from 'react'
import TaskList from './Components/TaskList/TaskList'
import AddTask from './Components/AddTask/AddTask'
import { useState } from 'react';
import EditTask from './Components/EditTask/EditTask';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null)

  const addTasks = (title, content)=>{
      const newtask = {id:Date.now(), title,content}
      setTasks([...tasks, newtask])
  }

  const handleRemove = (id)=>{
    setTasks(tasks.filter((item)=>item.id!==id))
  }

  const updateTask = (id, title, content)=>{
    setTasks(tasks.map(task=>
      task.id ===id ? {...tasks, title,content} : task
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-3xl font-extrabold text-purple-700 text-center mb-4 tracking-widest uppercase">
          Task Manager
        </h1>
        <AddTask addTasks={addTasks} />
        {currentTask && (
          <EditTask
            currentTask={currentTask}
            updateTask={updateTask}
            setCurrentTask={setCurrentTask}
          />
        )}
        <TaskList
          tasks={tasks}
          handleRemove={handleRemove}
          setCurrentTask={setCurrentTask}
        />
      </div>
    </div>
  )
}
