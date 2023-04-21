import styled from "styled-components"
import { getContrast } from "polished"

export const Main = styled.div`
  margin-top: 24px;
`

export const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > label {
      color: ${({ theme }) => theme.textLabel};
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 24px;

    button {
      width: 88px;
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

      &.cancel {
        background: ${({ theme }) => theme.danger};

        &:hover {
          background: ${({ theme }) => theme.dangerHover};
        }
      }

      &.submit {
        background: ${({ theme }) => theme.primaryDark};

        &:hover {
          background: ${({ theme }) => theme.primary};
        }
      }
    }
`