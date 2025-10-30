"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export type MainNavLinkProps = {
  linkText: string;
  href: string;
};

const MainNavLink = ({ href, linkText }: MainNavLinkProps) => {
  const path = usePathname();

  const btnVariant = path.startsWith(href) ? "default" : "outline";

  return (
    <Button variant={btnVariant} asChild>
      <Link href={href}>{linkText}</Link>
    </Button>
  );
};

export default MainNavLink;
