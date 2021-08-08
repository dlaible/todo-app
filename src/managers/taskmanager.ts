import ITask, { initITask } from '../interfaces/itask'

class TaskManager {
  tasks: ITask[]
  private taskCounter: number

  constructor() {
    this.taskCounter = 0
    this.tasks = []

    // Set the default tasks, useful for debugging
    // this.setDefaultTasks()
  }

  addTask = (text: string) => {
    const newTask = initITask({
      id: this.taskCounter,
      text: text,
    })
    this.tasks.push(newTask)
    this.taskCounter++
  }

  getDonePercent(): number {
    let donePercent = 0
    if (this.tasks.length > 0) {
      const doneCnt = this.tasks.filter((t) => t.done).length

      // Round the percentage to an integer value
      donePercent = Math.round((doneCnt / this.tasks.length) * 100)
    }
    return donePercent
  }

  setDone = (id: number, done: boolean) => {
    const idx = this.tasks.findIndex((t) => t.id === id)
    if (idx > -1) {
      this.tasks[idx].done = done
    }
  }

  private setDefaultTasks = () => {
    this.tasks = [
      initITask({ id: 0, text: 'Wash the dishes' }),
      initITask({ id: 1, text: 'Do the laundry' }),
      initITask({ id: 2, text: 'Clean the kitcken' }),
    ]
    this.taskCounter = this.tasks.length
  }
}

export default new TaskManager()
