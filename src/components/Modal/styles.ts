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
    background-color: rgba(0, 0, 0, 0.15);
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