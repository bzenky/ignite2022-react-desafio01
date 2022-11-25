import styled from "styled-components";

export const TaskItemContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.backgroundTaskItem};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;

  &+& {
    margin-top: 12px;
  }
`

export const TaskHandle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    gap: 12px;
  }

  &:hover .radioTask {
    background-color: ${({ theme }) => theme.inputPrimaryRadioHover};
    border-color: ${({ theme }) => theme.primaryDark};
  }

  &.done {
    &:hover .radioTask {
      border-color: ${({ theme }) => theme.secondary};
      background-color: ${({ theme }) => theme.secondary};
    }

    .radioTask {
      display: flex;
      justify-content: center;
      align-items: center;
      border-color: ${({ theme }) => theme.secondaryDark};
      background-color: ${({ theme }) => theme.secondaryDark};
    }

    .taskContent {
      text-decoration: line-through;
      color: ${({ theme }) => theme.textDisabled};
    }
  }

  .radioTask {
    width: 18px;
    height: 18px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 50%;

    transition: border-color 0.2s, background-color 0.2s;
  }

  .taskContent {
    max-width: 94%;
    line-break: anywhere;
    color: ${({ theme }) => theme.text};
    font-size: 0.875rem;

    transition: color 0.2s;

    @media screen and (max-width: 425px) {
      max-width: 88%;
    }
  }
`

export const TaskControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .editBtn,
  .deleteBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    margin-left: auto;
    background: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.secondary};
      outline-offset: 1px;
    }

    svg {
      height: 20px;

      path,
      line {
        transition: fill 0.2s;
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.backgroundControlButtonHover};

      svg {

        path,
        line {
          stroke: ${({ theme }) => theme.danger};
        }
      }
    }
  }
`