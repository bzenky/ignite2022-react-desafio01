import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { Content, TooltipArrow } from './styles'

interface TooltipProps {
    children: ReactNode
    message: string
}

export function TooltipHint({ children, message }: TooltipProps) {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Content>
                        {message}
                        <TooltipArrow />
                    </Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}