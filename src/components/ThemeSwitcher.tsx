import {
  WeatherMoon24Regular,
  WeatherSunny24Regular,
} from "@fluentui/react-icons";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button isIconOnly variant="light" onPress={toggleTheme}>
      {isDark ? <WeatherSunny24Regular /> : <WeatherMoon24Regular />}
    </Button>
  );
};

export default ThemeSwitcher;
