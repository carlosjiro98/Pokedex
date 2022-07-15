import s from './CardsDisplay.module.css';
import Card from './Card'
function CardsDisplay () {
    return (
        <div className={s.displayContainer}>
            <div className={s.header}>
                <h6>Yo Displayo cards</h6>
            </div>
            <div className={s.info}>
                <div className={s.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className={s.semiDetail}>
                    <h3>Card Detail</h3>
                </div>
            </div>
            
        </div>
    )
}

export default CardsDisplay;