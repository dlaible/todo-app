import React from 'react'

import './addtask.css'

const ENTER_KEY = 13

interface IProps {
  onAddTask: (text: string) => void
}

const AddTask = (props: IProps) => {
  const handleKeyPress = (e: any) => {
    if (e.charCode === ENTER_KEY) {
      props.onAddTask(e.target.value)
      e.target.value = ''
    }
  }

  return (
    <div>
      <div className='prompt'>
        What are you accomplishing today?
      </div>
      <input autoFocus className='add-task' onKeyPress={handleKeyPress} />
    </div>
  )
}

export default AddTask
