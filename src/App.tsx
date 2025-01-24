import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { Home } from "./pages/Home";

function App() {
  return (
    <HeroUIProvider>
      <ThemeProvider
        attribute="class"
        disableTransitionOnChange
        defaultTheme="dark"
      >
        <Home />
      </ThemeProvider>
    </HeroUIProvider>
  );
}

export default App;
