import {
  createContext,
  FormEvent,
  ReactNode,
  useEffect,
  useState
} from "react";
import {
  errorDuplicateMessage,
  errorEmptyMessage,
  successAddMessage,
  successRemoveMessage
} from "../components/Toasty";
import { dateFormatter } from "../utils/formatter";

interface ToDoContextProviderProps {
  children: ReactNode
}

interface ToDoContextProps {
  handleAddTask: (event: FormEvent) => void
  handleNewTaskInput: (value: string) => void
  handleTaskDone: (id: string) => void
  handleRemoveTask: (id: string) => void
  newTask: string
  taskList: Task[]
}

interface Task {
  id: string
  content: string
  isTaskDone: boolean
  createdAt: string
}

export const ToDoContext = createContext({} as ToDoContextProps)

export function ToDoContextProvider({ children }: ToDoContextProviderProps) {
  const [taskList, setTaskList] = useState<Task[]>(JSON.parse(window.localStorage.getItem('taskList') || '[]'));
  const [newTask, setNewTask] = useState('');
  const id = String(new Date().getTime())

  useEffect(() => {
    window.localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  function handleAddTask(event: FormEvent) {
    event.preventDefault()
    const date = dateFormatter.format(new Date())
    const verifyContentExists = taskList.filter(task => task.content.trim() === newTask.trim())

    if (newTask.trim() !== '' && verifyContentExists.length === 0) {
      setTaskList([...taskList, { id, content: newTask, isTaskDone: false, createdAt: date }])
      successAddMessage()
    } else if (newTask.trim() === '') {
      errorEmptyMessage()
    } else if (verifyContentExists.length !== 0) {
      errorDuplicateMessage()
    }

    setNewTask('')
  }

  function handleNewTaskInput(value: string) {
    setNewTask(value)
  }

  function handleTaskDone(id: string) {
    const taskListDoneUpdated = taskList.map(task => task.id === id ? { ...task, isTaskDone: !task.isTaskDone } : task)
    setTaskList(taskListDoneUpdated)
  }

  function handleRemoveTask(id: string) {
    const taskListUpdated = taskList.filter(task => task.id !== id)

    successRemoveMessage()
    setTaskList(taskListUpdated)
  }

  return (
    <ToDoContext.Provider
      value={{
        handleAddTask,
        handleNewTaskInput,
        handleTaskDone,
        handleRemoveTask,
        newTask,
        taskList,
      }}
    >
      {children}
    </ToDoContext.Provider>
  )
}