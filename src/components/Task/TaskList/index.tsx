import { useContext, useState } from 'react'
import { ToDoContext } from '../../../contexts/ToDoContext'
import * as Dialog from '@radix-ui/react-dialog'
import { EmptyTaskList } from '../EmptyTaskList'
import { TaskItem } from '../TaskItem'
import { EditModal } from '../../EditModal'

import { TaskListContainer, TaskListHeader } from './styles'

export function TaskList() {
    const [open, setOpen] = useState(false)
    const { taskList } = useContext(ToDoContext)

    function handleModal() {
        setOpen(!open)
    }

    return (
        <TaskListContainer>
            <TaskListHeader>
                <span className='tasksCreated'>
                    Tarefas Criadas
                    <span>{taskList.length}</span>
                </span>
                <span className='tasksDone'>
                    Concluídas
                    <span>
                        {taskList.filter(task => task.isTaskDone).length} de {taskList.length}
                    </span>
                </span>
            </TaskListHeader>
            {taskList.length === 0
                ? <EmptyTaskList />
                : (
                    <Dialog.Root open={open} onOpenChange={setOpen}>
                        {taskList.map(task => {
                            return (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                />
                            )
                        })}
                        <EditModal handleModal={handleModal} />
                    </Dialog.Root>
                )
            }
        </TaskListContainer>
    )
}