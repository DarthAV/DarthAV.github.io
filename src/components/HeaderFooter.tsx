import { Navbar, Link, Button, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, Divider } from "@nextui-org/react";
import ThemeChanger from "./ThemeChanger";


interface HeaderFooterProps {
  navSections: string[];
}

export function Header({ navSections }: HeaderFooterProps) {
  const collapse_sizes = "xs";

  return (
    // https://nextui.org/docs/components/navbar
    <Navbar isBordered position="sticky" className="flex justify-between items-center" >

      <NavbarBrand>
        <p className="text-2xl font-bold">
          Ansh
        </p>
      </NavbarBrand>
      <NavbarContent className="mx-4 hidden sm:flex "/* enableCursorHighlight variant={"highlight"} */>
        {navSections.map((item) => (
          <NavbarItem key={item}>
            <Link href={`#${item}`}>
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="mx-4">
        <NavbarMenuToggle aria-label="toggle navigation menu" className="sm:hidden" />
        <ThemeChanger />
      </NavbarContent>
      <NavbarMenu>
        {navSections.map((item) => (
          <NavbarMenuItem key={item}>
            <Link
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar >
  );
};


export function Footer({ navSections }: HeaderFooterProps) {
  return (
    <footer className="flex flex-col items-center justify-center h-24">
      <p className="text-2xl font-bold">
        Ansh Verma
      </p >
      <Divider />
      <div className="flex flex-wrap h-5 gap-4">
        {navSections.map((item) => (
          <Link key={item} href={`#${item}`}>
            {item}
          </Link>
        ))}
      </div>
    </footer >
  );
}