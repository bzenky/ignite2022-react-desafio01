import { useContext } from 'react'
import { ToDoContext } from '../../contexts/ToDoContext'
import * as Dialog from '@radix-ui/react-dialog'
import styles from './EditModal.module.scss'
import { errorDuplicateMessage, errorEmptyEditMessage, successEditMessage } from '../Toasty'

interface EditModalProps {
  handleModal: () => void
}

export function EditModal({ handleModal }: EditModalProps) {
  const { handleUpdateTaskInput, handleUpdateTaskList, updateTask, taskList } = useContext(ToDoContext)
  const currentTask = JSON.parse(window.localStorage.getItem('currentTask') || '{}')

  function handleEditTask() {
    event!.preventDefault()

    const verifyContentExists = taskList.filter(task => task.content.trim().toLowerCase() === updateTask.trim().toLowerCase())

    if (updateTask.trim() === '') {
      errorEmptyEditMessage()
    } else if (verifyContentExists.length >= 1) {
      errorDuplicateMessage()
    } else {
      const taskListEditedUpdated = taskList.map(task => task.id === currentTask.id ? { ...task, content: updateTask, } : task)
      handleUpdateTaskList(taskListEditedUpdated)
      successEditMessage()
      handleModal()
    }

    handleUpdateTaskInput('')
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content className={styles.modal}>
        <Dialog.Title className={styles.title}>
          Atualize sua task
        </Dialog.Title>

        <form onSubmit={handleEditTask} className={styles.form}>
          <div className={styles.inputs}>
            <label htmlFor="task">Descrição Atual</label>
            <input
              placeholder="Pray the sun"
              type="text"
              value={currentTask.content}
              disabled
            />

            <label htmlFor="task">Nova Descrição</label>
            <input
              name="task"
              id="task"
              placeholder="Insira a atualização da descrição"
              type="text"
              onChange={(event) => handleUpdateTaskInput(event.target.value)}
            />
          </div>

          <footer className={styles.footer}>
            <Dialog.Close asChild>
              <button
                type="button"
                className={styles.cancel}
              >
                Cancelar
              </button>
            </Dialog.Close>

            <button
              type="submit"
              className={styles.submit}
            >
              Atualizar
            </button>
          </footer>
        </form>

      </Dialog.Content>
    </Dialog.Portal>
  )
}
