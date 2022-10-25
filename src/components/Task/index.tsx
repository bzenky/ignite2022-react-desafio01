import { FormEvent, useEffect, useState } from 'react'

import { TaskAdd } from "./TaskAdd"
import { TaskList } from "./TaskList"
import {
    errorDuplicateMessage,
    errorEmptyMessage,
    successAddMessage,
    successRemoveMessage,
    Toasty
} from '../Toasty'

import styles from './Task.module.scss'
import { dateFormatter } from '../../utils/formatter'

interface Task {
    id: string
    content: string
    isTaskDone: boolean
    createdAt: string
}

export function Task() {
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

    function inputEventValue(value: string) {
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