import clipboardImg from '../../../assets/clipboard.png'

import styles from './EmptyTaskList.module.scss'

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <div className={styles.emptyList}>
        <img src={clipboardImg} alt="Ícone de Clipboard" width="56" height="56" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}