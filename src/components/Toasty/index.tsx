import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const successAddMessage = () => toast.success('Tarefa cadastrada !');
export const successRemoveMessage = () => toast.success('Tarefa removida !');
export const errorEmptyMessage = () => toast.error('Insira sua tarefa !', { toastId: 'emptyError' });
export const errorDuplicateMessage = () => toast.error('Tarefa já cadastrada !', { toastId: 'duplicateError' });

export function Toasty() {
    const windowWidth = window.innerWidth

    return (
        <ToastContainer
            position={windowWidth > 425 ? "top-right" : "bottom-center"}
            autoClose={1750}
            theme='dark'
        />
    )
}