import React from 'react'

import './task.css'

import check from '../images/check.svg'
import ITask from '../interfaces/itask'
import TaskManager from '../managers/taskmanager'

interface IProps {
  task: ITask
  onChangeTask: () => void
}

const DoneTaskText = (props: { task: ITask }) => (
  <span className='task-done'>{props.task.text}</span>
)

const TodoItem = (props: IProps) => {
  const { task } = props

  const handleTaskClick = () => {
    TaskManager.setDone(task.id, !task.done)
    props.onChangeTask()
  }

  const taskText = task.done ? <DoneTaskText task={task} /> : task.text
  const taskImgClass = task.done ? 'task-img-done' : 'task-img-todo'

  return (
    <div className='task' onClick={handleTaskClick}>
      <div className='parent'>
        <div className='task-info'>
          {taskText}
        </div>
        <div className='task-status'>
          <img src={check} className={taskImgClass} />
        </div>
      </div>
    </div>
  )
}

export default TodoItem
