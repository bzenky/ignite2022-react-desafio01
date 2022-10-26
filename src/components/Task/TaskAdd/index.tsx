import { useContext } from 'react'
import { ToDoContext } from '../../../contexts/ToDoContext'

import styles from './TaskAdd.module.scss'
import addIcon from '../../../assets/icon-add.svg'

export function TaskAdd() {
    const {
        handleNewTaskInput,
        handleAddTask,
        newTask
    } = useContext(ToDoContext)

    return (
        <div className={styles.taskAddWrapper} onSubmit={handleAddTask}>
            <form className={styles.newTaskForm}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    className={styles.taskInput}
                    onChange={(event) => handleNewTaskInput(event.target.value)}
                    value={newTask}
                />
                <button
                    className={styles.taskCreateButton}
                    title="Adicione uma nova tarefa"
                >
                    Criar
                    <img src={addIcon} alt="Ícone de adicionar" />
                </button>
            </form>
        </div>
    )
}