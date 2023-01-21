import { ReactNode } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { v4 as uuid } from 'uuid'
import { Content, TooltipArrow } from './styles'

interface TooltipProps {
    children: ReactNode
    message: string | string[]
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
                        {typeof message === 'string'
                            ? message
                            : message.map(eachMessage => <span key={uuid()}>{eachMessage}</span>)
                        }
                        <TooltipArrow />
                    </Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}