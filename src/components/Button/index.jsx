import { useTheme } from '../../hooks/useTheme.jsx'
import './button.styles.css'

function Button({ onclick }) {
    const { theme } = useTheme()
    return (
        <button
            className={`btn-outline ${theme === 'dark' && 'dark'}`}
            onClick={onclick}
        >
            remove
        </button>
    )
}

export default Button
