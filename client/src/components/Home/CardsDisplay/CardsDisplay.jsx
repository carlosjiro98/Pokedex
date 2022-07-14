import s from './CardsDisplay.module.css';
import Card from './Card'
function CardsDisplay () {
    return (
        <div className={s.displayContainer}>
            <h1>Yo Displayo cards</h1>
            <div className={s.cards}>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default CardsDisplay;