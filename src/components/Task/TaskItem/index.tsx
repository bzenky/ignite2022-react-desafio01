import * as Dialog from '@radix-ui/react-dialog'
import { Pencil, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ToDoContext } from '../../../contexts/ToDoContext'

import styles from './TaskItem.module.scss'

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
    <div className={styles.taskItem}>
      <div className={`${styles.taskHandle} ${isTaskDone && styles.done}`} onClick={() => handleTaskDone(id)} title={`Tarefa criada em ${createdAt}`} >
        <span className={styles.radioTask}></span>
        <span className={styles.taskContent}>{content}</span>
      </div>

      <div className={styles.controls}>
        <Dialog.Trigger asChild>
          <button className={styles.editBtn} onClick={setItemIdStorage}>
            <Pencil width={20} color='#808080' />
          </button>
        </Dialog.Trigger>

        <button className={styles.deleteBtn} onClick={() => handleRemoveTask(id)} title='Remover tarefa'>
          <Trash width={20} color='#808080' />
        </button>
      </div>
    </div>
  )
}