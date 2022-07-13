import styles from './TaskAdd.module.scss'

import addIcon from '../../../assets/icon-add.svg'

export function TaskAdd() {
    return (
        <div className={styles.taskAddWrapper}>
            <input type="text" placeholder="Adicione uma nova tarefa" className={styles.taskInput} />
            <button className={styles.taskCreateButton} title="Botão para adicionar uma nova tarefa">
                Criar
                <img src={addIcon} alt="Ícone de adicionar" />
            </button>
        </div>
    )
}