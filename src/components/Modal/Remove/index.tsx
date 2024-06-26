import { useContext } from 'react'
import { DialogClose } from "@radix-ui/react-dialog"
import { ToDoContext } from '../../../contexts/ToDoContext'
import { TaskProps } from '../../Task/TaskItem'
import { ButtonsWrapper, Description } from './styles'
import { GetLocalStorageItem } from '../../../utils/localStorage'

interface RemoveProps {
  handleModal: () => void
}

export function Remove({ handleModal }: RemoveProps) {
  const { handleRemoveTask } = useContext(ToDoContext)
  const currentTask: TaskProps = GetLocalStorageItem('currentTask') || '{}'

  function handleRemoveTaskModal() {
    handleModal()
    handleRemoveTask(currentTask.id)
  }

  return (
    <>
      <h2>
        Atenção
      </h2>

      <Description data-cy="deleteModalText">
        Você realmente deseja remover esta tarefa ?
      </Description>

      <ButtonsWrapper>
        <DialogClose asChild>
          <button
            type="button"
            className='cancel'
            data-cy="deleteCancelButton"
          >
            Cancelar
          </button>
        </DialogClose>

        <button
          type="button"
          className='remove'
          onClick={handleRemoveTaskModal}
          data-cy="deleteConfirmButton"
        >
          Remover
        </button>
      </ButtonsWrapper>
    </>
  )
}