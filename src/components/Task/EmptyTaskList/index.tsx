import { ClipboardText } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { EmptyList, EmptyTaskListContainer } from './styles'

export function EmptyTaskList() {
  const theme = useTheme()

  return (
    <EmptyTaskListContainer>
      <EmptyList>
        <ClipboardText size={64} color={theme.emptyListIcon} weight="light" />

        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </EmptyList>
    </EmptyTaskListContainer>
  )
}