import { useContext, useState } from 'react'
import { ToDoContext } from '../../../contexts/ToDoContext'
import * as Dialog from '@radix-ui/react-dialog'
import { EmptyTaskList } from '../EmptyTaskList'
import { TaskItem } from '../TaskItem'

import styles from './TaskList.module.scss'
import { EditModal } from '../../EditModal'

export function TaskList() {
    const [open, setOpen] = useState(false)
    const { taskList } = useContext(ToDoContext)

    function handleModal() {
        setOpen(!open)
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
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
                                <>
                                    <TaskItem
                                        key={task.id}
                                        content={task.content}
                                        taskId={task.id}
                                        isTaskDone={task.isTaskDone}
                                        createdAt={task.createdAt}
                                    />

                                    <EditModal
                                        description={task.content}
                                        taskId={task.id}
                                        handleModal={handleModal}
                                    />
                                </>
                            )
                        })
                    )
                }
            </div>

        </Dialog.Root>
    )
}