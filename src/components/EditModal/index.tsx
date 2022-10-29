import { useContext } from 'react'
import { ToDoContext } from '../../contexts/ToDoContext'
import * as Dialog from '@radix-ui/react-dialog'
import styles from './EditModal.module.scss'
import { errorDuplicateMessage, errorEmptyEditMessage, errorEmptyMessage, successEditMessage } from '../Toasty'

interface EditModalProps {
  description: string
  taskId: string
  handleModal: () => void
}

export function EditModal({ description, taskId, handleModal }: EditModalProps) {
  const { handleUpdateTaskInput, handleUpdateTaskList, updateTask, taskList } = useContext(ToDoContext)

  function handleEditTask(id: string, description: string) {
    event!.preventDefault()

    if (updateTask.trim() === '') {
      errorEmptyEditMessage()
    } else if (description === updateTask) {
      errorDuplicateMessage()
    } else {
      const taskListDoneUpdated = taskList.map(task => task.id === id ? { ...task, content: updateTask } : task)
      successEditMessage()
      handleUpdateTaskList(taskListDoneUpdated)
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

        <form onSubmit={() => handleEditTask(taskId, description)} className={styles.form}>
          <div className={styles.inputs}>
            <label htmlFor="description">Descrição atual</label>
            <input
              name="description"
              id="description"
              placeholder=""
              type="text"
              value={description}
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
