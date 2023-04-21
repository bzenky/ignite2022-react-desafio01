import {
  createContext,
  FormEvent,
  ReactNode,
  useEffect,
  useState
} from "react"
import {
  errorDuplicateMessage,
  errorEmptyMessage,
  successAddMessage,
  successRemoveMessage
} from "../components/Toasty"
import { useAnalyticsEventTracker } from "../hooks/useAnalyticsEventTracker"
import { dateFormatter } from "../utils/formatter"

interface ToDoContextProviderProps {
  children: ReactNode
}

interface ToDoContextProps {
  handleAddTask: (event: FormEvent) => void
  handleNewTaskInput: (value: string) => void
  handleUpdateTaskInput: (value: string) => void
  handleUpdateTaskList: (updatedTasklist: Task[]) => void
  handleTaskDone: (id: string) => void
  handleRemoveTask: (id: string) => void
  handleChangeTheme: (theme: string) => void
  newTask: string
  updateTask: string
  taskList: Task[]
  theme: string
}

interface Task {
  id: string
  content: string
  isTaskDone: boolean
  createdAt: string
  editedAt?: string
  doneAt?: string
}

export const ToDoContext = createContext({} as ToDoContextProps)

export function ToDoContextProvider({ children }: ToDoContextProviderProps) {
  const [taskList, setTaskList] = useState<Task[]>(JSON.parse(window.localStorage.getItem('taskList') || '[]'));
  const [newTask, setNewTask] = useState('');
  const [updateTask, setUpdateTask] = useState('')
  const [theme, setTheme] = useState('default')
  const id = String(new Date().getTime())

  useEffect(() => {
    window.localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  function handleAddTask(event: FormEvent) {
    event.preventDefault()
    const date = dateFormatter.format(new Date())
    const checkTaskExists = taskList.filter(task => task.content.trim() === newTask.trim()).length > 0

    if (newTask.trim() !== '' && !checkTaskExists) {
      setTaskList((state) => ([
        { id, content: newTask, isTaskDone: false, createdAt: date },
        ...state,
      ]))
      successAddMessage()
    } else if (newTask.trim() === '') {
      errorEmptyMessage()
    } else if (checkTaskExists) {
      errorDuplicateMessage()
    }

    setNewTask('')
    useAnalyticsEventTracker({
      category: 'Task',
      action: 'Create new task',
      label: 'Add new task'
    })
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
    const date = dateFormatter.format(new Date())

    const taskListDoneUpdated = taskList
      .map(task => task.id === id
        ? {
          ...task,
          isTaskDone: !task.isTaskDone,
          doneAt: !task.isTaskDone ? date : undefined,
        }
        : task)

    const taskListSorted = taskListDoneUpdated.sort((a, b) => {
      if (a.isTaskDone && !b.isTaskDone) {
        return 1
      } else if (!a.isTaskDone && b.isTaskDone) {
        return -1
      } else {
        return Number(b.createdAt) - Number(a.createdAt)
      }
    })

    setTaskList(taskListSorted)
    useAnalyticsEventTracker({
      category: 'Task',
      action: 'Complete Task',
      label: 'Mark task as finished'
    })
  }

  function handleRemoveTask(id: string) {
    const taskListUpdated = taskList.filter(task => task.id !== id)

    successRemoveMessage()
    setTaskList(taskListUpdated)

    useAnalyticsEventTracker({
      category: 'Task',
      action: 'Remove Task',
      label: 'Remove task from list'
    })
  }

  function handleChangeTheme(theme: string) {
    setTheme(theme)
  }

  return (
    <ToDoContext.Provider
      value={{
        handleAddTask,
        handleChangeTheme,
        handleNewTaskInput,
        handleTaskDone,
        handleRemoveTask,
        handleUpdateTaskInput,
        handleUpdateTaskList,
        newTask,
        taskList,
        theme,
        updateTask,
      }}
    >
      {children}
    </ToDoContext.Provider>
  )
}