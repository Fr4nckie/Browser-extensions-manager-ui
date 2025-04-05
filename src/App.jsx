import { useEffect } from 'react'
import Header from './components/Header/index.jsx'
import SectionExtensions from './components/SectionExtensions/index.jsx'
import { useTheme } from './hooks/useTheme.jsx'

function App() {
    const { theme } = useTheme()

    useEffect(() => {
        const body = document.body
        body.classList.remove('dark', 'light')
        body.classList.add(theme === 'dark' ? 'dark' : 'light')
    }, [theme])

    return (
        <div className="container">
            <Header />
            <SectionExtensions />
        </div>
    )
}

export default App
