import styled from "styled-components";

export const TaskListContainer = styled.div`
    margin-top: 64px;
`

export const TaskListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    cursor: default;

    .tasksCreated {
        color: ${({ theme }) => theme.primary};
        font-size: 0.875rem;
        font-weight: 700;
    }

    .tasksDone {
        color: ${({ theme }) => theme.secondary};
        font-size: 0.875rem;
        font-weight: 700;
    }

    .tasksCreated,
    .tasksDone {
        >span {
            padding: 2px 8px;
            margin-left: 8px;
            background-color: ${({ theme }) => theme.backgroundCounter};
            border-radius: 999px;
            color: ${({ theme }) => theme.textCounter};
        }
    }
`