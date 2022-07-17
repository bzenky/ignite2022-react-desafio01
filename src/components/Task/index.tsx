import { FormEvent, useState } from 'react'

import { TaskAdd } from "./TaskAdd"
import { TaskList } from "./TaskList"
import { errorDuplicateMessage, errorEmptyMessage, successMessage, Toasty } from '../Toasty'

import styles from './Task.module.scss'

interface Task {
    id: string
    content: string
    isTaskDone: boolean
}

export function Task() {
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<Task>({ content: '', id: '', isTaskDone: false });
    const id = String(new Date().getTime())

    function handleAddTask(event: FormEvent) {
        event.preventDefault()
        const verifyContentExists = taskList.filter(task => task.content === newTask.content)

        if (newTask.content.trim() !== '' && verifyContentExists.length === 0) {
            setTaskList([...taskList, newTask])
            successMessage()
        } else if (newTask.content.trim() === '') {
            errorEmptyMessage()
        } else if (verifyContentExists.length !== 0) {
            errorDuplicateMessage()
        }

        setNewTask({ content: '', id: '', isTaskDone: false })
    }

    function inputEventValue(value: string) {
        setNewTask({ content: value, id: id, isTaskDone: false })
    }

    function handleTaskDone(id: string) {
        const taskListDoneUpdated = taskList.map(task => task.id === id ? { ...task, isTaskDone: !task.isTaskDone } : task)
        setTaskList(taskListDoneUpdated)
    }

    function handleRemoveTask(id: string) {
        const taskListUpdated = taskList.filter(task => task.id !== id)

        setTaskList(taskListUpdated)
    }

    return (
        <main className={styles.main}>
            <TaskAdd
                onInputChange={inputEventValue}
                handleAddTask={handleAddTask}
                newTask={newTask}
            />

            <TaskList
                taskList={taskList}
                handleTaskDone={handleTaskDone}
                handleRemoveTask={handleRemoveTask}
            />

            <Toasty />
        </main>
    )
}