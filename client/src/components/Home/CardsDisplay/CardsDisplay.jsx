import s from './CardsDisplay.module.css';
import Card from './Card'
import Controls from './controls/Controls';
function CardsDisplay () {
    return (
        <div className={s.displayContainer}>
            <div className={s.header}>
                <div id={s.bisel}>
                    <div id={s.biselC}></div>
                </div>
                <div className={s.minC} id={s.red}></div>
                <div className={s.minC} id={s.yellow}></div>
                <div className={s.minC} id={s.green}></div>
                <div id={s.bar}></div>
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
                    <Controls/>
                </div>

            </div>
            
        </div>
    )
}

export default CardsDisplay;