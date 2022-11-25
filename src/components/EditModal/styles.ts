import * as Dialog from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);

    &[data-state='open'] {
        animation: ${fadeIn} 0.25s ease-out;
    }

    &[data-state='closed'] {
        animation: ${fadeOut} 0.25s ease-in;
    }
`

export const ModalContainer = styled(Dialog.Content)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 4px ${({ theme }) => theme.shadowModal};
  
    max-width: 400px;
    width: 94%;
    padding: 24px;
    background: ${({ theme }) => theme.backgroundModal};
    border-radius: 6px;

    h2 {
        color: ${({ theme }) => theme.secondary};
        font-size: 1.375rem;
        font-weight: 700;
        text-align: center;
    }

    &[data-state='open'] {
        animation: ${fadeIn} 0.25s ease-out;
    }

    &[data-state='closed'] {
        animation: ${fadeOut} 0.25s ease-in;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;

    label {
      color: ${({ theme }) => theme.textLabel};
      font-size: 0.875rem;
    }

    input {
      padding: 12px 12px;
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