import { WeatherMoon24Regular, WeatherSunny24Regular } from "@fluentui/react-icons";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";


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
            onPress={toggleTheme}
        />
    )
}

export default ThemeChanger;