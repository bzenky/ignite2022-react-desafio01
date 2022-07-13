import styles from './TaskList.module.scss'

import clipboardImg from '../../../assets/clipboard.png'

export function TaskList() {
    return (
        <div className={styles.taskWrapper}>
            <div className={styles.taskHeader}>
                <span className={styles.tasksCreated}>
                    Tarefas Criadas
                    <span>0</span>
                </span>
                <span className={styles.tasksDone}>
                    Concluídas
                    <span>0</span>
                </span>
            </div>

            <div className={styles.taskList}>
                <div className={styles.emptyList}>
                    <img src={clipboardImg} alt="Ícone de Clipboard" width="56" height="56" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div>
        </div>
    )
}