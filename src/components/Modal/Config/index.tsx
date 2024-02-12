import { DialogClose } from "@radix-ui/react-dialog"
import { Select } from "../../Select"
import { Footer, ItemWrapper, Main } from "./styles"
import { Switch } from "../../Switch"

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

        <ItemWrapper>
          <label>Reordenar automaticamente</label>

          <Switch />
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