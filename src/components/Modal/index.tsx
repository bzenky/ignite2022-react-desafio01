import * as Dialog from '@radix-ui/react-dialog'
import { Config } from './Config'
import { Details } from './Details'
import { Edit } from './Edit'
import { Remove } from './Remove'
import { ModalContainer, Overlay } from './styles'

interface EditModalProps {
  handleModal?: () => void
  type: 'edit' | 'remove' | 'details' | 'config'
}

export function Modal({ handleModal = () => { }, type }: EditModalProps) {
  function ModalContent() {
    switch (type) {
      case 'edit':
        return <Edit handleModal={handleModal} />
      case 'remove':
        return <Remove handleModal={handleModal} />
      case 'details':
        return <Details />
      case 'config':
        return <Config />
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
        data-cy="modal"
      >
        {ModalContent()}
      </ModalContainer>
    </Dialog.Portal>
  )
}
