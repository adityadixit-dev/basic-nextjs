import { Separator } from "@/components/ui/separator";
import { getAllRows } from "@/lib/db/queries/generic/get-all-rows";
import { simpleNotes } from "@/lib/db/schema/simple-notes.schema";

const RecentNotes = async () => {
  const listOfNotes = await getAllRows(simpleNotes);

  return (
    <section>
      <Separator className="my-2" />
      <ul>
        {listOfNotes.map((n) => (
          <li key={n.id}>
            <h2>{n.title}</h2>
            <p>{n.note}</p>
            <Separator className="my-2" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentNotes;
