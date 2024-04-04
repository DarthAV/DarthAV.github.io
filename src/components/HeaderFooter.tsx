import {
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { HoverEffect } from "./HoverLink";
import ThemeSwitcher from "./ThemeSwitcher";

interface HeaderFooterProps {
  navSections: string[];
}

export function Header({ navSections }: HeaderFooterProps) {
  return (
    // https://nextui.org/docs/components/navbar
    <Navbar isBordered position="sticky" className="flex items-center">
      <NavbarContent className="mx-4">
        <NavbarMenuToggle aria-label={"Toggle menu"} className="sm:hidden" />
        <NavbarBrand>
          <p className="text-xl font-bold">Ansh</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden mx-4 sm:flex" justify="center">
        <HoverEffect items={navSections} />
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
    </Navbar>
  );
}

export function Footer({ navSections }: HeaderFooterProps) {
  return (
    <footer className="flex flex-col items-center justify-center h-24 my-12 w-max gap-4">
      <Divider />
      <p className="text-2xl font-bold">Ansh Verma</p>
      <div className="flex flex-wrap h-5 gap-4 justify-center">
        {navSections.map((item) => (
          <Link key={item} href={`#${item}`}>
            {item}
          </Link>
        ))}
      </div>
      <p className="text-sm">© 2024 Ansh Verma</p>
    </footer>
  );
}
