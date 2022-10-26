import { TaskAdd } from "./TaskAdd"
import { TaskList } from "./TaskList"
import { Toasty } from '../Toasty'

import styles from './Task.module.scss'

export function Task() {
    return (
        <main className={styles.main}>
            <TaskAdd />

            <TaskList />

            <Toasty />
        </main>
    )
}