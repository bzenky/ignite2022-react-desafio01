import styles from './Header.module.scss'

import todoLogoImg from '../../assets/logo-todo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogoImg} alt="Logo Todo" width="126" height="48" />
        </header>
    )
}