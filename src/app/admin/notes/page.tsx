import { Separator } from "@/components/ui/separator";
import AddNote from "./_components/AddNote";
import RecentNotes from "./_components/RecentNotes";

const page = () => {
  return (
    <article>
      <h2>Simple Notes to demonstrate DB</h2>

      <Separator className="my-4" />
      <section>
        <h3>Add Simple Note here</h3>
        <AddNote />
      </section>

      <Separator className="my-4" />
      <section>
        <h3>Recent Notes here</h3>
        <RecentNotes />
      </section>
    </article>
  );
};

export default page;
