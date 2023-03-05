import { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ToDoContext } from '../../../contexts/ToDoContext'
import { ButtonsWrapper, Description } from './styles'

interface RemoveProps {
  handleModal: () => void
}

export function Remove({ handleModal }: RemoveProps) {
  const { handleRemoveTask } = useContext(ToDoContext)
  const currentTask = JSON.parse(window.localStorage.getItem('currentTask') || '{}')

  function handleRemoveTaskModal() {
    handleModal()
    handleRemoveTask(currentTask.id)
  }

  return (
    <>
      <h2>
        Atenção
      </h2>

      <Description>
        Você realmente deseja remover esta tarefa ?
      </Description>

      <ButtonsWrapper>
        <Dialog.Close asChild>
          <button
            type="button"
            className='cancel'
          >
            Cancelar
          </button>
        </Dialog.Close>

        <button
          type="button"
          className='remove'
          onClick={handleRemoveTaskModal}
        >
          Remover
        </button>
      </ButtonsWrapper>
    </>
  )
}