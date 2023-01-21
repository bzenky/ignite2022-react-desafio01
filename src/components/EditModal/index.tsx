import { useContext } from 'react'
import { CopySimple } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { ToDoContext } from '../../contexts/ToDoContext'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { errorDuplicateMessage, errorEmptyEditMessage, successCopiedMessage, successEditMessage } from '../Toasty'
import { dateFormatter } from '../../utils/formatter'
import { ButtonCopy, Footer, Form, InputWrapper, ModalContainer, Overlay } from './styles'

interface EditModalProps {
  handleModal: () => void
}

export function EditModal({ handleModal }: EditModalProps) {
  const [value, copy] = useCopyToClipboard()
  const {
    handleUpdateTaskInput,
    handleUpdateTaskList,
    updateTask,
    taskList
  } = useContext(ToDoContext)
  const currentTask = JSON.parse(window.localStorage.getItem('currentTask') || '{}')

  function handleEditTask() {
    event!.preventDefault()

    const verifyContentExists = taskList.filter(task => task.content.trim().toLowerCase() === updateTask.trim().toLowerCase())

    if (updateTask.trim() === '') {
      errorEmptyEditMessage()
    } else if (verifyContentExists.length >= 1) {
      errorDuplicateMessage()
    } else {
      const lastEditDate = dateFormatter.format(new Date())
      const taskListEditedUpdated = taskList.map(task => task.id === currentTask.id
        ? { ...task, content: updateTask, editedAt: lastEditDate }
        : task
      )
      handleUpdateTaskList(taskListEditedUpdated)
      successEditMessage()
      handleModal()
    }

    handleUpdateTaskInput('')
  }

  function handleCopyTask() {
    event!.preventDefault()
    copy(currentTask.content)
    successCopiedMessage()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <ModalContainer onOpenAutoFocus={(event) => event.preventDefault()}>
        <h2>
          Atualize sua tarefa
        </h2>

        <Form onSubmit={handleEditTask}>
          <InputWrapper>
            <label htmlFor="task">Descrição Atual</label>
            <div>
              <input
                value={currentTask.content}
                readOnly
              />

              <ButtonCopy type="button" onClick={handleCopyTask}>
                <CopySimple size={18} color='#D9D9D9' />
              </ButtonCopy>
            </div>

            <label htmlFor="task">Nova Descrição</label>
            <input
              name="task"
              id="task"
              placeholder="Insira a atualização da descrição"
              onChange={(event) => handleUpdateTaskInput(event.target.value)}
              autoFocus
            />
          </InputWrapper>

          <Footer>
            <Dialog.Close asChild>
              <button
                type="button"
                className='cancel'
              >
                Cancelar
              </button>
            </Dialog.Close>

            <button
              type="submit"
              className='submit'
            >
              Atualizar
            </button>
          </Footer>
        </Form>

      </ModalContainer>
    </Dialog.Portal>
  )
}
