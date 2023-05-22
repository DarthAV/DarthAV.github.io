import { NextUIProvider } from '@nextui-org/react';
import { Home } from './pages/Home';
import { ThemeProvider } from "next-themes";


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
