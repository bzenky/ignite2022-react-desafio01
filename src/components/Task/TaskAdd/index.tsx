import { FormEvent } from 'react'

import styles from './TaskAdd.module.scss'

import addIcon from '../../../assets/icon-add.svg'

interface Task {
    id: string
    content: string
}
interface TaskAddProps {
    handleAddTask: (event: FormEvent) => void
    onInputChange: (content: string) => void
    newTask: Task
}

export function TaskAdd({ handleAddTask, onInputChange, newTask }: TaskAddProps) {
    return (
        <div className={styles.taskAddWrapper} onSubmit={handleAddTask}>
            <form className={styles.newTaskForm}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    className={styles.taskInput}
                    onChange={(event) => onInputChange(event.target.value)}
                    value={newTask.content}
                />
                <button
                    className={styles.taskCreateButton}
                    title="Botão para adicionar uma nova tarefa"
                >
                    Criar
                    <img src={addIcon} alt="Ícone de adicionar" />
                </button>
            </form>
        </div>
    )
}