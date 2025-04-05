import './header.styles.css'
import Logo from '../../assets/images/logo.svg?react'
import IconMoon from '../../assets/images/icon-moon.svg?react'
import IconSun from '../../assets/images/icon-sun.svg?react'
import { useTheme } from '../../hooks/useTheme.jsx'

function Header() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`header ${theme === 'dark' ? 'dark' : null}`}>
            <Logo />
            <button
                className={`header_btn-theme ${
                    theme === 'dark' ? 'dark' : null
                }`}
                onClick={toggleTheme}
            >
                {theme === 'dark' ? <IconSun /> : <IconMoon />}
            </button>
        </div>
    )
}

export default Header
