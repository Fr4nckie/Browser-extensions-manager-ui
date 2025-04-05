import { useExtensions } from '../../hooks/useExtensions.jsx'
import { useTheme } from '../../hooks/useTheme.jsx'
import './filters.styles.css'
function Filters() {
    const { theme } = useTheme()
    const { state, dispatch } = useExtensions()
    const filters = ['all', 'active', 'inactive']

    return (
        <div className={`filters ${theme === 'dark' && 'dark'}`}>
            {filters.map((filter, index) => (
                <button
                    key={index}
                    className={`filters_btn ${theme === 'dark' && 'dark'} ${
                        state.filter === filter && 'active'
                    }`}
                    onClick={() =>
                        dispatch({ type: 'SET_FILTER', payload: filter })
                    }
                >
                    {filter}
                </button>
            ))}
        </div>
    )
}

export default Filters
