import * as Dialog from '@radix-ui/react-dialog'
import { Edit } from './Edit'
import { ModalContainer, Overlay } from './styles'

interface EditModalProps {
  handleModal: () => void
  type: string
}

export function Modal({ handleModal, type }: EditModalProps) {
  return (
    <Dialog.Portal>
      <Overlay />
      <ModalContainer onOpenAutoFocus={(event) => event.preventDefault()}>
        <Edit handleModal={handleModal} />
      </ModalContainer>
    </Dialog.Portal>
  )
}
