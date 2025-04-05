import { useTheme } from '../../hooks/useTheme.jsx'
import './button.styles.css'

function Button() {
    const { theme } = useTheme()
    return (
        <button className={`btn-outline ${theme === 'dark' && 'dark'}`}>
            remove
        </button>
    )
}

export default Button
