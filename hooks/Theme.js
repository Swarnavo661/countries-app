import { useState } from "react"

export function useTheme()
{
    const [DarkMode, setDarkMode] = useState(false)

    return [DarkMode, setDarkMode]
}