import styled from "styled-components"
import { getContrast } from "polished"

export const Description = styled.span`
  display: block;
  margin: 32px 0;
  color: ${({ theme }) => theme.text};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;

  > button {
      padding: 10px 16px;
      cursor: pointer;
      border: none;
      border-radius: 2px;
      color: ${({ theme }) => getContrast(theme.primaryDark, theme.text) > 4.5 ? theme.text : theme.background};
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