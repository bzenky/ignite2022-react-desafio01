import styled, { ThemeProps } from "styled-components"
import { getContrast } from "polished"

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
`

export const AddTaskButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 16px;
    height: 54px;
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => getContrast(theme.primaryDark, theme.text) > 4.5 ? theme.text : theme.background};
    font-size: 0.875rem;
    line-height: 1;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.primary};
    }

    &:focus {
        outline: 2px solid ${({ theme }) => theme.secondary};
        outline-offset: 2px;
    }
`

export const ConfigButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 16px;
    height: 54px;
    background-color: ${({ theme }) => theme.secondaryDark};
    border-radius: 8px;
    border: none;
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.secondary};
    }

    &:focus {
        outline: 2px solid ${({ theme }) => theme.secondary};
        outline-offset: 2px;
    }
`
