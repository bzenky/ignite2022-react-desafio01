import * as Tooltip from '@radix-ui/react-tooltip'
import styled, { keyframes } from 'styled-components'

export const slideUpAndFade = keyframes`
    from {
    opacity: 0;
    transform: translateY(2px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`

export const slideRightAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateX(-2px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const slideDownAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateY(-2px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const slideLeftAndFade = keyframes`
    from {
        opacity: 0;
        transform: translateX(2px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const Content = styled(Tooltip.Content)`
    width: 90%;
    max-width: 320px;
    padding: 10px 8px;
    background: ${({ theme }) => theme.secondaryDark};
    text-align: center;
    color: #fff;
    font-size: 0.75rem;
    line-height: 1.5;
    box-shadow: 0px 2px 12px rgb(18 45 71 / 10%);
    border-radius: 8px;
    user-select: none;
    animation-duration: 0.4s;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

    &[data-state='delayed-open'][data-side='top'] {
        animation-name: ${slideDownAndFade};
    }
    &[data-state='delayed-open'][data-side='right'] {
        animation-name: ${slideLeftAndFade};
    }
    
    &[data-state='delayed-open'][data-side='bottom'] {
        animation-name: ${slideUpAndFade};
    }
    &[data-state='delayed-open'][data-side='left'] {
        animation-name: ${slideRightAndFade};
    }
`

export const TooltipArrow = styled(Tooltip.Arrow)`
    fill: #224261;
    border-radius: 1px;
`