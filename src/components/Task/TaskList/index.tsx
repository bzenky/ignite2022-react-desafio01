import { useContext } from 'react'
import { ToDoContext } from '../../../contexts/ToDoContext'
import { EmptyTaskList } from '../EmptyTaskList'
import { TaskItem } from '../TaskItem'

import styles from './TaskList.module.scss'

export function TaskList() {
    const { taskList } = useContext(ToDoContext)

    return (
        <div className={styles.taskWrapper}>
            <div className={styles.taskHeader}>
                <span className={styles.tasksCreated}>
                    Tarefas Criadas
                    <span>{taskList.length}</span>
                </span>
                <span className={styles.tasksDone}>
                    Concluídas
                    <span>
                        {taskList.filter(task => task.isTaskDone).length} de {taskList.length}
                    </span>
                </span>
            </div>

            {taskList.length === 0
                ? <EmptyTaskList />
                : (
                    taskList.map(task => {
                        return (
                            <TaskItem
                                key={task.id}
                                content={task.content}
                                id={task.id}
                                isTaskDone={task.isTaskDone}
                                createdAt={task.createdAt}
                            />
                        )
                    })
                )
            }
        </div>
    )
}