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
    <nav className="flex items-center justify-between p-12">
      <div>{logo}</div>
      <div className="flex items-center gap-10">
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
