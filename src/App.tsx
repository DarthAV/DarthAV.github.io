import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from "next-themes";
import { Home } from './pages/Home';


function App() {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange defaultTheme="dark">
        <Home />
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default App;
