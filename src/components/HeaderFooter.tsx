import { Navbar, Link, Text, Button } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import { WeatherMoon24Regular, WeatherSunny24Regular } from "@fluentui/react-icons";

const navSections = ["Home", "About", "Experience", "Education", "Projects", "Skills"];

export function Header() {
  const variant = "sticky";
  const collapse_sizes = "xs";

  const darkMode = useDarkMode(false);

  return (
    // https://nextui.org/docs/components/navbar
    <Navbar isBordered variant={variant}>

      <Navbar.Brand>
        <Text h4 color="inherit">
          Ansh
        </Text>
      </Navbar.Brand>

      <Navbar.Content enableCursorHighlight hideIn={collapse_sizes} variant={"highlight"}>
        {/* <Navbar.Link href="#" isActive>
          Home
        </Navbar.Link> */}
        {navSections.map((item) => (
          <Navbar.Link key={item} href="#">
            {item}
          </Navbar.Link>
        ))}
      </Navbar.Content>

      <Navbar.Content>
        <Navbar.Toggle aria-label="toggle navigation" showIn={collapse_sizes} />
        <Button
          auto light
          icon={darkMode.value ? <WeatherSunny24Regular /> : <WeatherMoon24Regular />}
          onClick={() => darkMode.toggle()}
        />
      </Navbar.Content>

      <Navbar.Collapse>
        {navSections.map((item) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};


export function Footer() {
  return (
    <footer className="footer">
      <Text color="inherit" b>
        Ansh Verma
      </Text>
      {/* <Spacer />
      {navSections.map((item) => (
        <Link pad key={item} href="#">
          {item}
        </Link>
      ))} */}
    </footer>
  );
}