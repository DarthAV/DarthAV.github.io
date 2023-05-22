import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { WeatherSunny24Regular, WeatherMoon24Regular } from "@fluentui/react-icons";


const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()
    const isDark = theme === 'dark'
    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark')
    }

    return (
        <Button
            isIconOnly variant="light"
            startIcon={isDark ? <WeatherSunny24Regular /> : <WeatherMoon24Regular />}
            onClick={toggleTheme}
        />
    )
}

export default ThemeChanger;