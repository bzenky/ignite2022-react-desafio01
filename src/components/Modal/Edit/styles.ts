import styled, { keyframes } from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;

    > div {
      position: relative;
    }

    label {
      color: ${({ theme }) => theme.textLabel};
      font-size: 0.875rem;
    }

    input {
      width: 100%;
      padding: 12px 34px 12px 12px;
      color: ${({ theme }) => theme.text};
      background: ${({ theme }) => theme.inputBackground};
      border: none;
      border-radius: 4px;

      &:disabled {
        opacity: 0.6;
      }

      &:focus {
        outline: 2px solid ${({ theme }) => theme.secondaryDark};
        outline-offset: 2px;
      }
    }
`

export const ButtonCopy = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 5;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.secondaryDark};
    outline: none;
  }
`

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 24px;

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