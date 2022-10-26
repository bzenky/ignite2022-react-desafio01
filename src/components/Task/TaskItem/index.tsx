import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ToDoContext } from '../../../contexts/ToDoContext'

import styles from './TaskItem.module.scss'

interface TaskItemProps {
  content: string
  id: string
  isTaskDone: boolean
  createdAt: string
}

export function TaskItem({ content, id, isTaskDone, createdAt }: TaskItemProps) {
  const { handleRemoveTask, handleTaskDone } = useContext(ToDoContext)

  return (
    <div className={styles.taskItem}>
      <div className={`${styles.taskHandle} ${isTaskDone && styles.done}`} onClick={() => handleTaskDone(id)} title={`Tarefa criada em ${createdAt}`} >
        <span className={styles.radioTask}></span>
        <span className={styles.taskContent}>{content}</span>
      </div>
      <button className={styles.deleteBtn} onClick={() => handleRemoveTask(id)} title='Remover tarefa'>
        <Trash width={20} color='#808080' />
      </button>
    </div>
  )
}