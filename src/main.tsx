import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import AddTask from './addtask/addtask'
import Header from './header/header'
import TaskManager from './managers/taskmanager'
import TaskList from './tasklist/tasklist'

import './main.css'

const Divider = () => (
  <div className='divider'></div>
)

const App = () => {
  const [tasks, setTasks] = useState(TaskManager.tasks)

  const handleAddTask = (text: string) => {
    TaskManager.addTask(text)
    setTasks([...TaskManager.tasks])
  }

  const handleChangeTask = () => {
    setTasks([...TaskManager.tasks])
  }

  return (
    <React.StrictMode>
      <div className='container'>
        <div className='content'>
          <Header />
          <Divider />
          <AddTask onAddTask={handleAddTask} />
          <TaskList onChangeTask={handleChangeTask} tasks={tasks} />
        </div>
      </div>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
