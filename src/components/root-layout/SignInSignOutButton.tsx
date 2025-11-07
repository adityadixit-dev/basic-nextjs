import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { CircleUserRound } from "lucide-react";
import { Suspense } from "react";
import { Button } from "../ui/button";

const SignInSignOutButton = () => {
  return (
    <Suspense fallback={<CircleUserRound size={36} />}>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Button variant="outline" asChild className="cursor-pointer">
          <SignInButton mode="modal" />
        </Button>
      </SignedOut>
    </Suspense>
  );
};

export default SignInSignOutButton;
