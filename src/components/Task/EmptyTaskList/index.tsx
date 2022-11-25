import clipboardImg from '../../../assets/clipboard.png'

import { EmptyList, EmptyTaskListContainer } from './styles'

export function EmptyTaskList() {
  return (
    <EmptyTaskListContainer>
      <EmptyList>
        <img src={clipboardImg} alt="Ícone de Clipboard" width="56" height="56" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </EmptyList>
    </EmptyTaskListContainer>
  )
}