/* eslint-disable react/prop-types */
import { useCallback, useContext, useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const getTheme = () => {
    const stored = localStorage.getItem('theme')
    if (stored) {
        return JSON.parse(stored)
    }
    return 'light'
}

const ThemeContext = createContext({
    theme: getTheme(),
    toggleTheme: () => {}
})

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(getTheme())
    const toggleTheme = useCallback(() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }, [theme])

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
