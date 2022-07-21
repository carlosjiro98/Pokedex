import s from './CardsDisplay.module.css';
import Card from './Card'
import Controls from './controls/Controls';

import {useDispatch, useSelector} from 'react-redux';
import charge from '../../../img/ch.gif'
import {inc} from '../../../store/actions'

function CardsDisplay () {
    const dispatch = useDispatch();
    let page = useSelector((state) => state.count)
    let pokes = useSelector((state) => state.mainPokes);
    /* const lastIndex = page * 16;
        const firstIndex = lastIndex - 16;
        const gamesp = games.slice(firstIndex, lastIndex) */
    const lastIndex = page * 12;
    let arrPokes = pokes.slice(0, lastIndex);

    function handleOnClick () {
        dispatch(inc());
        console.log(page)
    }

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
                            arrPokes.length > 0 ? arrPokes.map((p)=><Card poke={p} key={p.id}/>) : <div className={s.loading}><img alt='loading' src={charge}/></div>
                        }
                    </div>
                    <div className={s.moreBtn} onClick={handleOnClick}>
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