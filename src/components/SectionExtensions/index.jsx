import './section-extensions.styles.css'
import CardGrid from '../Card-grid/index'
import Filters from '../Filters/index.jsx'
function SectionExtensions() {
    return (
        <section className="section-extensions">
            <div className="section-extensions_header">
                <h2 className="section-extensions_title">Extensions list</h2>
                <Filters />
            </div>
            <CardGrid />
        </section>
    )
}

export default SectionExtensions
