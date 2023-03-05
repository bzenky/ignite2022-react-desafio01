import * as Dialog from '@radix-ui/react-dialog'
import { Edit } from './Edit'
import { Remove } from './Remove'
import { ModalContainer, Overlay } from './styles'

interface EditModalProps {
  handleModal: () => void
  type: 'edit' | 'remove'
}

export function Modal({ handleModal, type }: EditModalProps) {
  function ModalContent() {
    switch (type) {
      case 'edit':
        return <Edit handleModal={handleModal} />
      case 'remove':
        return <Remove handleModal={handleModal} />
      default:
        return
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <ModalContainer onOpenAutoFocus={(event) => event.preventDefault()}>
        {ModalContent()}
      </ModalContainer>
    </Dialog.Portal>
  )
}
