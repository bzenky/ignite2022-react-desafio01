import { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { ToDoContext } from '../../contexts/ToDoContext'

export const successAddMessage = () => toast.success('Tarefa cadastrada !')
export const successCopiedMessage = () => toast.success('Tarefa copiada !', { toastId: 'copiedMessage' })
export const errorCopiedMessage = () => toast.success('Funcionalidade incompatível !', { toastId: 'errorCopiedMessage' })
export const successEditMessage = () => toast.success('Tarefa atualizada !')
export const successRemoveMessage = () => toast.success('Tarefa removida !')
export const errorEmptyMessage = () => toast.error('Insira sua tarefa !', { toastId: 'emptyError' })
export const errorDuplicateMessage = () => toast.error('Tarefa já cadastrada !', { toastId: 'duplicateError' })
export const errorEmptyEditMessage = () => toast.error('Insira a nova descrição !', { toastId: 'errorEmptyEditMessage' })

export function Toasty() {
    const windowWidth = window.innerWidth
    const { theme } = useContext(ToDoContext)

    return (
        <ToastContainer
            position={windowWidth > 425 ? "top-right" : "bottom-center"}
            autoClose={1750}
            theme={theme === 'default' ? 'dark' : 'light'}
        />
    )
}