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
  handleAddTask: () => void
  handleNewTaskInput: (value: string) => void
  handleUpdateTaskInput: (value: string) => void
  handleUpdateTaskList: (updatedTasklist: Task[]) => void
  handleTaskDone: (id: string) => void
  handleRemoveTask: (id: string) => void
  newTask: string
  updateTask: string
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
  const [updateTask, setUpdateTask] = useState('')
  const id = String(new Date().getTime())

  useEffect(() => {
    window.localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  function handleAddTask() {
    event!.preventDefault()
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

  function handleUpdateTaskInput(value: string) {
    setUpdateTask(value)
  }

  function handleUpdateTaskList(updatedTasklist: Task[]) {
    setTaskList(updatedTasklist)
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
        handleUpdateTaskInput,
        handleUpdateTaskList,
        newTask,
        taskList,
        updateTask,
      }}
    >
      {children}
    </ToDoContext.Provider>
  )
}