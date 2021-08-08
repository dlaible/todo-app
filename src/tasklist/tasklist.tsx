import confetti from 'canvas-confetti'
import React from 'react'

import ITask from '../interfaces/itask'
import TaskManager from '../managers/taskmanager'
import Task from '../task/task'

import './tasklist.css'

interface IProps {
  onChangeTask: () => void
  tasks: ITask[]
}

const handleTasksComplete = () => {
  const particleCnt = 100

  confetti({
    particleCount: particleCnt,
    angle: 45,
    origin: {
      x: 0,
      y: 1,
    }
  })
  confetti({
    particleCount: particleCnt,
    angle: 135,
    origin: {
      x: 1,
      y: 1,
    }
  })
}

const TaskList = (props: IProps) => {
  const { tasks, onChangeTask } = props
  const taskItems = tasks.map((t) => (
    <Task key={t.id} task={t} onChangeTask={onChangeTask} />
  ))
  const donePercent = TaskManager.getDonePercent()

  // Display nothing if there are no tasks
  if (taskItems.length === 0) {
    return null
  }

  // Handle all tasks being marked as done
  if (donePercent === 100) {
    handleTasksComplete()
  }

  return (
    <div className='task-list'>
      <span>Tasks • {donePercent}%</span>
      {taskItems}
    </div>
  )
}

export default TaskList
