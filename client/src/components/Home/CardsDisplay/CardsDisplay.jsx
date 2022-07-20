import s from './CardsDisplay.module.css';
import Card from './Card'
import Controls from './controls/Controls';

import {useSelector} from 'react-redux';
import charge from '../../../img/ch.gif'

function CardsDisplay () {

    let pokes = useSelector((state) => state.mainPokes);

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
                <div className={s.display}>
                    <div className={s.cards}>
                        {
                            pokes.length > 0 ? pokes.map((p)=><Card poke={p} key={p.id}/>) : <div className={s.loading}><img alt='loading' src={charge}/></div>
                        }
                    </div>
                    <div className={s.moreBtn}>
                        <h3>Ver Mas</h3>
                    </div>
                </div>
                
                <div className={s.semiDetail}>
                    <Controls/>
                </div>

            </div>
            
        </div>
    )
}

export default CardsDisplay;