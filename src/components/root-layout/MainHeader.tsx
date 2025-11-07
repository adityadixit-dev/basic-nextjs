import Link from "next/link";
import LightDarkButton from "../ui/custom/LightDarkButton";
import MainNavLink, { MainNavLinkProps } from "./MainNavLink";
import SignInSignOutButton from "./SignInSignOutButton";

// TODO: Add Main header navigation here
const navLinks: MainNavLinkProps[] = [
  { linkText: "About", href: "/about" },
  { linkText: "Members", href: "/members" },
  { linkText: "Admin", href: "/admin" },
];
const MainHeader = () => {
  return (
    <header className="w-full sticky top-0 z-50 border-b-2 bg-muted py-2">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h2>Home</h2>
        </Link>
        <ul className="flex gap-x-4 items-center">
          {navLinks.map(({ href, linkText }) => (
            <li key={href}>
              <MainNavLink href={href} linkText={linkText} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-x-2">
          <SignInSignOutButton />
          <LightDarkButton />
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
