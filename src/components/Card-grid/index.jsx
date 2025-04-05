import { useExtensions } from '../../hooks/useExtensions.jsx'
import Card from '../Card/index.jsx'
import './card-grid.styles.css'
function CardGrid() {
    const { state } = useExtensions()
    const filteredData = () => {
        if (state.filter == 'all') {
            return state.data
        } else if (state.filter == 'active') {
            return state.data.filter((extension) => extension.isActive)
        } else {
            return state.data.filter((extension) => !extension.isActive)
        }
    }

    return (
        <div className="card-grid">
            {filteredData().map((extension) => (
                <Card extension={extension} key={extension.id} />
            ))}
        </div>
    )
}

export default CardGrid
