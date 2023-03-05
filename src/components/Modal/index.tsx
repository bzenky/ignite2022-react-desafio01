import * as Dialog from '@radix-ui/react-dialog'
import { Details } from './Details'
import { Edit } from './Edit'
import { Remove } from './Remove'
import { ModalContainer, Overlay } from './styles'

interface EditModalProps {
  handleModal: () => void
  type: 'edit' | 'remove' | 'details'
}

export function Modal({ handleModal, type }: EditModalProps) {
  function ModalContent() {
    switch (type) {
      case 'edit':
        return <Edit handleModal={handleModal} />
      case 'remove':
        return <Remove handleModal={handleModal} />
      case 'details':
        return <Details />
      default:
        return
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <ModalContainer
        onOpenAutoFocus={(event) => event.preventDefault()}
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        {ModalContent()}
      </ModalContainer>
    </Dialog.Portal>
  )
}
