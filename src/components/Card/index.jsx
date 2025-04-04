import './card.styles.css'
import CardIcon from '../../assets/images/logo-devlens.svg?react'
import { ToggleSlider } from 'react-toggle-slider'
import Button from '../Button/index.jsx'

function Card() {
    return (
        <article className="card">
            <div className="card_header">
                <div className="card_icon">
                    <CardIcon />
                </div>
                <div className="card_content">
                    <h3 className="card_title">DevLens</h3>
                    <p className="card_description">
                        Quickly inspect page layouts and visualize element
                        boundaries.
                    </p>
                </div>
            </div>
            <div className="card_actions">
                <Button />
                <ToggleSlider
                    barBackgroundColor="hsl(0, 0%, 78%)"
                    barBackgroundColorActive="hsl(3, 71%, 56%)"
                    padding={2}
                    barHeight={20}
                    barWidth={38}
                />
            </div>
        </article>
    )
}

export default Card
