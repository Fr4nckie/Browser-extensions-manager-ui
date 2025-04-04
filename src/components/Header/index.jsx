import './header.styles.css'
import Logo from '../../assets/images/logo.svg?react'
import IconMoon from '../../assets/images/icon-moon.svg?react'
import IconSun from '../../assets/images/icon-sun.svg?react'

function Header() {
    return (
        <div className="header">
            <Logo />
            <button className="header_btn-theme">
                <IconMoon />
            </button>
        </div>
    )
}

export default Header
