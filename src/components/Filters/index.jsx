import { useTheme } from '../../hooks/useTheme.jsx'
import './filters.styles.css'
function Filters() {
    const { theme } = useTheme()

    return (
        <div className={`filters ${theme === 'dark' && 'dark'}`}>
            <button className={`filters_btn ${theme === 'dark' && 'dark'}`}>
                all
            </button>
            <button className={`filters_btn ${theme === 'dark' && 'dark'}`}>
                active
            </button>
            <button className={`filters_btn ${theme === 'dark' && 'dark'}`}>
                inactive
            </button>
        </div>
    )
}

export default Filters
