import * as Dialog from '@radix-ui/react-dialog'
import { Check, Pencil, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ToDoContext } from '../../../contexts/ToDoContext'
import { TaskControlsWrapper, TaskHandle, TaskItemContainer } from './styles'

interface TaskItemProps {
  task: TaskProps
}

interface TaskProps {
  content: string
  id: string
  isTaskDone: boolean
  createdAt: string
}

export function TaskItem({ task }: TaskItemProps) {
  const { handleRemoveTask, handleTaskDone } = useContext(ToDoContext)
  const { content, id, isTaskDone, createdAt } = task

  function setItemIdStorage() {
    window.localStorage.setItem('currentTask', JSON.stringify(task))
  }

  return (
    <TaskItemContainer>
      <TaskHandle className={`${isTaskDone && 'done'}`} onClick={() => handleTaskDone(id)} title={`Tarefa criada em ${createdAt}`} >
        <span className='radioTask'>{isTaskDone && <Check width={10} color='#FFF' weight='bold' />}</span>
        <span className='taskContent'>{content}</span>
      </TaskHandle>

      <TaskControlsWrapper>
        <Dialog.Trigger asChild>
          <button className='editBtn' onClick={setItemIdStorage} title='Editar tarefa'>
            <Pencil width={20} color='#808080' />
          </button>
        </Dialog.Trigger>

        <button className='deleteBtn' onClick={() => handleRemoveTask(id)} title='Remover tarefa'>
          <Trash width={20} color='#808080' />
        </button>
      </TaskControlsWrapper>
    </TaskItemContainer>
  )
}