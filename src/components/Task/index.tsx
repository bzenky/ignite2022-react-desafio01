import styles from './Task.module.scss';

import { TaskAdd } from "./TaskAdd";
import { TaskList } from "./TaskList";

export function Task() {
    return (
        <main className={styles.main}>
            <TaskAdd />

            <TaskList />
        </main>
    )
}