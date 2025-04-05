/* eslint-disable react/prop-types */
import { useCallback, useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => {}
})

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = useCallback(() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
