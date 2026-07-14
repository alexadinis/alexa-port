import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  navLinks: NavLink[];
  logo: React.ReactNode;
}

const Navbar = ({ navLinks, logo }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-10 bg-black z-20">
      <div className="w-[260px] shrink-0 sm:w-[360px] md:w-[434px]">{logo}</div>
      <div className="flex items-center gap-6 hidden md:flex">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label.toLowerCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
