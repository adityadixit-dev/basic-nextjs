import FormContainer from "@/components/ui/forms/FormContainer";
import { Input } from "@/components/ui/input";
import { createSimpleNoteAction } from "@/lib/actions/simple-notes.actions";

const AddNote = () => {
  return (
    <section>
      <FormContainer
        actionFn={createSimpleNoteAction}
        submitBtnText="Add Note to DB"
      >
        <Input type="text" name="title" placeholder="Note Title" required />
        <Input type="text" name="note" placeholder="Note Body" required />
      </FormContainer>
    </section>
  );
};

export default AddNote;
