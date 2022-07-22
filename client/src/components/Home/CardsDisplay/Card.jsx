import { useDispatch } from 'react-redux';
import s from './Card.module.css';

import {setSemi, getDetail} from '../../../store/actions'
function Card ({poke}) {
    const dispatch = useDispatch();
    function handleImgOnClick () {
        dispatch(getDetail("reset"))
        dispatch(getDetail(poke.id))
        dispatch(setSemi('semiDet'));
    }
    function handleTipos() {
        if(poke.length===0) return <p className={s.resaltar}>"cargando"</p>
        /* if(poke.id.length>10){
            let x = poke.types.map((e)=>e.name)
            console.log(x)
            return <p className={s.resaltar}>{x.join(', ')}</p>
        } */
        return <p className={s.resaltar}>{poke.types.join(', ')}</p>
    }
    return ( 
        <div className={s.card}>
            <div className={s.pname}>
                <h3>{poke.name.toUpperCase() || "cargando..."}</h3>
            </div>
            <div className={s.imgContainer}>
                {!poke.image ? "cargando..." : <img alt='pokemon' src={poke.image} onClick={handleImgOnClick}/>}
            </div>
            <div className={s.types}>
            {handleTipos()}
            </div>
        </div> 
    )
}

export default Card;