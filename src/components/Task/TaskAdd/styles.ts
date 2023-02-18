import styled from "styled-components";

export const TaskAddContainer = styled.div`
    margin-top: -27px;
`

export const NewTaskForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    input {
        width: 100%;
        max-width: 638px;
        height: 54px;
        padding: 16px;
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.inputBackground};
        border-radius: 8px;
        border: 0;
        font-size: 1rem;

            &::placeholder {
            color: ${({ theme }) => theme.textDisabled};
        }

        &:active,
        &:focus {
            outline: 2px solid ${({ theme }) => theme.secondaryDark};
            outline-offset: 2px;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        padding: 16px;
        height: 54px;
        background-color: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.text};
        font-size: 0.875rem;
        line-height: 1;
        border-radius: 8px;
        border: none;
        cursor: pointer;

        transition: all 0.2s ease-in-out;

        &:disabled {
            opacity: 0.6;
        }

        &:not(:disabled):hover {
            background-color: ${({ theme }) => theme.primary};
        }

        &:focus {
            outline: 2px solid ${({ theme }) => theme.secondary};
            outline-offset: 2px;
        }
    }
`