import { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Gear, PlusCircle } from 'phosphor-react'
import { ToDoContext } from '../../../contexts/ToDoContext'
import { Modal } from '../../Modal'
import { AddTaskButton, ConfigButton, NewTaskForm, TaskAddContainer } from './styles'

export function TaskAdd() {
    const {
        handleNewTaskInput,
        handleAddTask,
        newTask
    } = useContext(ToDoContext)

    return (
        <TaskAddContainer>
            <Dialog.Root>
                <NewTaskForm onSubmit={handleAddTask}>
                    <input
                        placeholder="Adicione uma nova tarefa"
                        onChange={(event) => handleNewTaskInput(event.target.value)}
                        value={newTask}
                        data-cy="addInput"
                    />

                    <AddTaskButton
                        title="Adicione uma nova tarefa"
                        type="submit"
                        disabled={newTask.trim().length === 0}
                        data-cy="createButton"
                    >
                        Criar
                        <PlusCircle width={20} height={20} color='#FFF' />
                    </AddTaskButton>

                    <Dialog.Trigger asChild>
                        <ConfigButton
                            title="Configurações"
                            type="button"
                        >
                            <Gear width={20} height={20} color='#FFF' />
                        </ConfigButton>
                    </Dialog.Trigger>

                    <Modal type='config' />
                </NewTaskForm>
            </Dialog.Root>
        </TaskAddContainer>
    )
}