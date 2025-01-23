import {
  Button,
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { HoverNavLink } from "./HoverNavLink";
import ThemeSwitcher from "./ThemeSwitcher";

interface HeaderFooterProps {
  navSections: string[];
}

export function Header({ navSections }: HeaderFooterProps) {
  return (
    // https://nextui.org/docs/components/navbar
    (<Navbar isBordered position="sticky" className="flex items-center">
      <NavbarContent className="mx-4">
        <NavbarMenuToggle aria-label={"Toggle menu"} className="sm:hidden" />
        <NavbarBrand>
          <p className="text-2xl font-bold">Ansh</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden mx-4 sm:flex" justify="center">
        <HoverNavLink items={navSections} />
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>
      <NavbarMenu>
        {navSections.map((item) => (
          <NavbarMenuItem key={item}>
            <Link href={`#${item}`}>{item}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>)
  );
}

export function Footer({ navSections }: HeaderFooterProps) {
  return (
    <footer className="flex flex-col items-center justify-center h-24 my-24 w-max gap-4">
      <Divider />
      <p className="text-2xl font-bold">Ansh Verma</p>
      <div className="flex flex-wrap h-5 gap-4 justify-center">
        {navSections.map((item) => (
          <Link key={item} href={`#${item}`}>
            {item}
          </Link>
        ))}
      </div>
      <div className="flex gap-3">
        <Button as={Link} href="https://github.com/DarthAV" isExternal isIconOnly variant="light">
          <img height={32} width={32} alt="GitHub" className="dark:invert"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </Button>
        <Button as={Link} href="https://linkedin.com/in/verma-ansh" isExternal isIconOnly variant="light">
          <img height={32} width={32} alt="LinkedIn"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
        </Button>
      </div >
      <p className="text-sm">Made with 💖</p>
      <p className="text-sm">© {new Date().getFullYear()} Ansh Verma</p>
    </footer >
  );
}
