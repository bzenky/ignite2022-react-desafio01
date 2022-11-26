import { useContext, useState } from 'react'
import { ToDoContext } from '../../../contexts/ToDoContext'
import * as Dialog from '@radix-ui/react-dialog'
import { EmptyTaskList } from '../EmptyTaskList'
import { TaskItem } from '../TaskItem'
import { EditModal } from '../../EditModal'

import { TaskListContainer, TaskListHeader } from './styles'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'

export function TaskList() {
    const [open, setOpen] = useState(false)
    const { taskList, handleUpdateTaskList } = useContext(ToDoContext)

    function handleModal() {
        setOpen(!open)
    }

    const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
        // Estilização do Item quando estiver realizando o drag
        outline: isDragging && '2px solid #8284FA',
        outlineOffset: '4px',
        borderRadius: '8px',
        ...draggableStyle,
    })

    const getListStyle = (isDraggingOver: boolean) => ({
        // Estilização da Lista quando estiver realizando o drag
        background: isDraggingOver ? '#22222280' : '',
        transition: 'all 0.2s ease-out',
        borderRadius: '8px',
    })

    function handleOnDragEnd(result: DropResult) {
        if (!result.destination) return

        const items = Array.from(taskList)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        handleUpdateTaskList(items)
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
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="droppable-area" direction="vertical">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                >
                                    {taskList.map((task, index) => {
                                        return (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <Dialog.Root
                                                        open={open}
                                                        onOpenChange={setOpen}
                                                    >
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            key={task.id}
                                                            style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style
                                                            )}
                                                        >
                                                            <TaskItem
                                                                task={task}
                                                            />
                                                        </div>

                                                        <EditModal handleModal={handleModal} />
                                                    </Dialog.Root>
                                                )}
                                            </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                )
            }
        </TaskListContainer>
    )
}