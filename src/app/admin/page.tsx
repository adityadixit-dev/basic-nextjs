import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <h2>Admin Page</h2>
      <p>
        You can only view this if you are Signed In and Authorized as ADMIN to
        view this page
      </p>
      <Separator className="my-4" />
    </section>
  );
};

export default page;
