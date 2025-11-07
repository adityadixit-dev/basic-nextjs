// TODO: Set main heading for testing first

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const RootHomePage = () => {
  return (
    <article>
      <h2>Root Home Page</h2>
      <p>This is a public Route</p>
      <p>
        So Is the{" "}
        <Link href="/about" className="underline">
          About
        </Link>{" "}
        Page
      </p>
      <Separator className="my-4" />
      <h2>The Admin can be only accessed through certain roles</h2>
      <p>username: test.email@testing.com </p>
      <p>password: S4qK5Na9PZSQtKu </p>
      <Link href="/admin" className="underline">
        Click here to sign in to the admin page
      </Link>
    </article>
  );
};

export default RootHomePage;
