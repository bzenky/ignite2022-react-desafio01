import { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Check, Info, Pencil, Trash } from 'phosphor-react'
import { ToDoContext } from '../../../contexts/ToDoContext'
import { TooltipHint } from '../../Tooltip'
import { TaskControlsWrapper, TaskHandle, TaskItemContainer } from './styles'
import { SetLocalStorageItem } from '../../../utils/localStorage'

interface TaskItemProps {
  task: TaskProps
  setSelectedOption: (value: 'edit' | 'remove' | 'details') => void
}

export interface TaskProps {
  content: string
  id: string
  isTaskDone: boolean
  createdAt: string
  editedAt?: string
  doneAt?: string
}

export function TaskItem({ task, setSelectedOption }: TaskItemProps) {
  const { handleTaskDone } = useContext(ToDoContext)
  const { content, id, isTaskDone } = task

  function handleModal(type: 'edit' | 'remove' | 'details') {
    SetLocalStorageItem('currentTask', task)
    setSelectedOption(type)
  }

  return (
    <TaskItemContainer>
      <TaskHandle className={`${isTaskDone && 'done'}`} onClick={() => handleTaskDone(id)}>
        <span className='radioTask'>
          {isTaskDone && <Check width={10} color='#FFF' weight='bold' />}
        </span>

        <span className='taskContent' data-cy="taskContent">
          {content}
        </span>
      </TaskHandle>

      <TaskControlsWrapper>
        <TooltipHint message={'Ver detalhes da tarefa'}>
          <Dialog.Trigger asChild>
            <button onClick={() => handleModal('details')}>
              <Info size={20} color='#808080' />
            </button>
          </Dialog.Trigger>
        </TooltipHint>

        <TooltipHint message={'Editar tarefa'}>
          <Dialog.Trigger asChild>
            <button onClick={() => handleModal('edit')}>
              <Pencil width={20} color='#808080' />
            </button>
          </Dialog.Trigger>
        </TooltipHint>

        <TooltipHint message={'Remover tarefa'}>
          <Dialog.Trigger asChild>
            <button onClick={() => handleModal('remove')}>
              <Trash width={20} color='#808080' />
            </button>
          </Dialog.Trigger>
        </TooltipHint>
      </TaskControlsWrapper>
    </TaskItemContainer>
  )
}