import { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Check, Info, Pencil, Trash } from 'phosphor-react'
import { ToDoContext } from '../../../contexts/ToDoContext'
import { useIsMobile } from '../../../hooks/useIsMobile'
import { TooltipHint } from '../../Tooltip'
import { TaskControlsWrapper, TaskHandle, TaskItemContainer } from './styles'

interface TaskItemProps {
  task: TaskProps
  setSelectedOption: (value: 'edit' | 'remove') => void
}

interface TaskProps {
  content: string
  id: string
  isTaskDone: boolean
  createdAt: string
  editedAt?: string
  doneAt?: string
}

export function TaskItem({ task, setSelectedOption }: TaskItemProps) {
  const { handleTaskDone } = useContext(ToDoContext)
  const { content, id, isTaskDone, createdAt, editedAt, doneAt } = task
  const isMobile = useIsMobile()
  const createdAtMessage = `Tarefa criada em ${createdAt}`
  const editedAtMessage = editedAt ? `Última edição em ${editedAt}` : ''
  const doneAtMessage = doneAt ? `Tarefa concluída em ${doneAt}` : ''

  const taskItemToolTipMessage = [createdAtMessage, editedAtMessage, doneAtMessage]

  function setItemIdStorage(type: 'edit' | 'remove') {
    window.localStorage.setItem('currentTask', JSON.stringify(task))
    setSelectedOption(type)
  }

  return (
    <TaskItemContainer>
      <TaskHandle className={`${isTaskDone && 'done'}`} onClick={() => handleTaskDone(id)}>
        <span className='radioTask'>
          {isTaskDone && <Check width={10} color='#FFF' weight='bold' />}
        </span>

        <span className='taskContent'>
          {content}
        </span>
      </TaskHandle>

      <TaskControlsWrapper>
        {!isMobile &&
          <TooltipHint message={taskItemToolTipMessage}>
            <Info size={20} color='#808080' />
          </TooltipHint>
        }

        <TooltipHint message={'Editar tarefa'}>
          <Dialog.Trigger asChild>
            <button className='editBtn' onClick={() => setItemIdStorage('edit')}>
              <Pencil width={20} color='#808080' />
            </button>
          </Dialog.Trigger>
        </TooltipHint>

        <TooltipHint message={'Remover tarefa'}>
          <Dialog.Trigger asChild>
            <button className='deleteBtn' onClick={() => setItemIdStorage('remove')}>
              <Trash width={20} color='#808080' />
            </button>
          </Dialog.Trigger>
        </TooltipHint>
      </TaskControlsWrapper>
    </TaskItemContainer>
  )
}