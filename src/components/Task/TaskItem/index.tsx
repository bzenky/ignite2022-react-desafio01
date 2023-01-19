import * as Dialog from '@radix-ui/react-dialog'
import { Check, Info, Pencil, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ToDoContext } from '../../../contexts/ToDoContext'
import { useIsMobile } from '../../../hooks/useIsMobile'
import { TooltipHint } from '../../Tooltip'
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
  const isMobile = useIsMobile()

  function setItemIdStorage() {
    window.localStorage.setItem('currentTask', JSON.stringify(task))
  }

  console.log(useIsMobile)

  return (
    <TaskItemContainer>
      <TaskHandle className={`${isTaskDone && 'done'}`} onClick={() => handleTaskDone(id)} title={`Tarefa criada em ${createdAt}`} >
        <span className='radioTask'>{isTaskDone && <Check width={10} color='#FFF' weight='bold' />}</span>
        <span className='taskContent'>{content}</span>
      </TaskHandle>

      <TaskControlsWrapper>
        {!isMobile &&
          <TooltipHint message={`Tarefa criada em ${createdAt}`}>
            <Info size={20} color='#808080' />
          </TooltipHint>
        }

        <TooltipHint message={'Editar tarefa'}>
          <Dialog.Trigger asChild>
            <button className='editBtn' onClick={setItemIdStorage}>
              <Pencil width={20} color='#808080' />
            </button>
          </Dialog.Trigger>
        </TooltipHint>

        <TooltipHint message={'Remover tarefa'}>
          <button className='deleteBtn' onClick={() => handleRemoveTask(id)}>
            <Trash width={20} color='#808080' />
          </button>
        </TooltipHint>
      </TaskControlsWrapper>
    </TaskItemContainer>
  )
}