import { useContext } from 'react'
import { ToDoContext } from '../../../contexts/ToDoContext'
import { PlusCircle } from 'phosphor-react'

import { NewTaskForm, TaskAddContainer } from './styles'

export function TaskAdd() {
    const {
        handleNewTaskInput,
        handleAddTask,
        newTask
    } = useContext(ToDoContext)

    return (
        <TaskAddContainer onSubmit={handleAddTask}>
            <NewTaskForm>
                <input
                    placeholder="Adicione uma nova tarefa"
                    onChange={(event) => handleNewTaskInput(event.target.value)}
                    value={newTask}
                />
                <button
                    title="Adicione uma nova tarefa"
                >
                    Criar
                    <PlusCircle width={20} height={20} color='#FFF' />
                </button>
            </NewTaskForm>
        </TaskAddContainer>
    )
}