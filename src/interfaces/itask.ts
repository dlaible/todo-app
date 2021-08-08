interface ITask {
  id: number
  text: string
  done: boolean
}

export function initITask(opts: Partial<ITask>): ITask {
  return {
    id: opts.id || 0,
    text: opts.text || '',
    done: opts.done || false,
  }
}

export default ITask
