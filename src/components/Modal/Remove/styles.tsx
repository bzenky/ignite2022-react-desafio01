import styled from "styled-components"

export const Description = styled.span`
  display: block;
  margin: 32px 0;
  color: ${({ theme }) => theme.text};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;

  button {
      padding: 10px 16px;
      cursor: pointer;
      border: none;
      border-radius: 2px;
      color: ${({ theme }) => theme.text};
      transition: background 0.2s ease-out;
      font-weight: 500;

      &:focus {
        outline: 2px solid ${({ theme }) => theme.secondaryDark};
        outline-offset: 2px;
      }

      &.remove {
        background: ${({ theme }) => theme.danger};

        &:hover {
          background: ${({ theme }) => theme.dangerHover};
        }
      }

      &.cancel {
        background: ${({ theme }) => theme.primaryDark};

        &:hover {
          background: ${({ theme }) => theme.primary};
        }
      }
    }
`