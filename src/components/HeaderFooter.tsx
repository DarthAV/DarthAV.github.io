import {
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";

interface HeaderFooterProps {
  navSections: string[];
}

export function Header({ navSections }: HeaderFooterProps) {
  return (
    // https://nextui.org/docs/components/navbar
    <Navbar
      isBordered
      position="sticky"
      className="flex justify-between items-center"
    >
      <NavbarBrand>
        <p className="text-xl font-bold">Ansh</p>
      </NavbarBrand>
      <NavbarContent
        className="mx-4 hidden sm:flex " /* enableCursorHighlight variant={"highlight"} */
      >
        {navSections.map((item) => (
          <NavbarItem key={item}>
            <Link href={`#${item}`}>{item}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="mx-4">
        <NavbarMenuToggle
          aria-label="toggle navigation menu"
          className="sm:hidden"
        />
        <ThemeSwitcher />
      </NavbarContent>
      <NavbarMenu>
        {navSections.map((item) => (
          <NavbarMenuItem key={item}>
            <Link href="#">{item}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export function Footer({ navSections }: HeaderFooterProps) {
  return (
    <footer className="flex flex-col items-center justify-center h-24">
      <p className="text-2xl font-bold">Ansh Verma</p>
      <Divider />
      <div className="flex flex-wrap h-5 gap-4 justify-center">
        {navSections.map((item) => (
          <Link key={item} href={`#${item}`}>
            {item}
          </Link>
        ))}
      </div>
      <p className="text-sm">© 2023 Ansh Verma</p>
    </footer>
  );
}
