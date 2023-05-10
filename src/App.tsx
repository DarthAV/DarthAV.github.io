import { NextUIProvider, createTheme } from '@nextui-org/react';
import { Home } from './pages/Home';
import useDarkMode from "use-dark-mode";

const lightTheme = createTheme({
  type: 'light',
  theme: {
    // colors: {...}, // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    // colors: {...}, // optional
  }
})


function App() {
  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Home />
    </NextUIProvider>
  );
}

export default App;
