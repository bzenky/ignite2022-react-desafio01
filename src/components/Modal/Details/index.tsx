import { DialogClose } from "@radix-ui/react-dialog";
import { TaskProps } from "../../Task/TaskItem";
import { ButtonWrapper, DetailsWrapper } from "./styles";
import { GetLocalStorageItem } from "../../../utils/localStorage";

export function Details() {
  const currentTask: TaskProps = GetLocalStorageItem("currentTask") || "{}";
  const { createdAt, doneAt, editedAt } = currentTask;

  return (
    <>
      <h2 data-cy="detailsModalTitle">Detalhes da tarefa</h2>

      <DetailsWrapper>
        <span>Criada: {createdAt}</span>
        <span>Última edição: {editedAt || '-'}</span>
        <span>Concluída: {doneAt || '-'}</span>

        <ButtonWrapper>
          <DialogClose asChild>
            <button
              type="button"
              className="cancel"
              data-cy="detailsBackButton"
            >
              Voltar
            </button>
          </DialogClose>
        </ButtonWrapper>
      </DetailsWrapper>
    </>
  );
}
