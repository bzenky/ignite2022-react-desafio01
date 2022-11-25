import { TaskAdd } from "./TaskAdd"
import { TaskList } from "./TaskList"
import { Toasty } from '../Toasty'
import { TaskContainer } from "./styles"


export function Task() {
    return (
        <TaskContainer>
            <TaskAdd />

            <TaskList />

            <Toasty />
        </TaskContainer>
    )
}