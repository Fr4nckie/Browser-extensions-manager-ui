/* eslint-disable react/prop-types */
import './card.styles.css'
import { ToggleSlider } from 'react-toggle-slider'
import Button from '../Button/index.jsx'
import { useTheme } from '../../hooks/useTheme.jsx'
import { useExtensions } from '../../hooks/useExtensions.jsx'

function Card({ extension }) {
    const { theme } = useTheme()
    const { dispatch } = useExtensions()

    return (
        <article className={`card ${theme === 'dark' && 'dark'}`}>
            <div className="card_header">
                <div className="card_icon">
                    <img src={extension.logo} alt="" />
                </div>
                <div className="card_content">
                    <h3 className="card_title">{extension.name}</h3>
                    <p
                        className={`card_description ${
                            theme === 'dark' && 'dark'
                        }`}
                    >
                        {extension.description}
                    </p>
                </div>
            </div>
            <div className="card_actions">
                <Button
                    onclick={() =>
                        dispatch({
                            type: 'DELETE_EXTENSION',
                            payload: extension.id
                        })
                    }
                />
                <ToggleSlider
                    barBackgroundColor={
                        theme === 'dark'
                            ? 'hsl(226, 11%, 37%)'
                            : 'hsl(0, 0%, 78%)'
                    }
                    barBackgroundColorActive="hsl(3, 71%, 56%)"
                    padding={2}
                    barHeight={20}
                    barWidth={38}
                    onToggle={() =>
                        dispatch({
                            type: 'TOGGLE_EXTENSION',
                            payload: extension.id
                        })
                    }
                    active={extension.isActive}
                />
            </div>
        </article>
    )
}

export default Card
