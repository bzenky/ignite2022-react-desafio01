import { DialogClose } from "@radix-ui/react-dialog"
import { Select } from "../../Select"
import { Footer, ItemWrapper, Main } from "./styles"

export function Config() {
  return (
    <>
      <h2>
        Configurações
      </h2>

      <Main>
        <ItemWrapper>
          <label>Tema</label>

          <Select />
        </ItemWrapper>
      </Main>

      <Footer>
        <DialogClose asChild>
          <button
            type="submit"
            className='submit'
          >
            Ok
          </button>
        </DialogClose>

      </Footer>
    </>
  )
}