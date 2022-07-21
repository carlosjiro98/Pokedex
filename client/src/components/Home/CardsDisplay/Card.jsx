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
    return (
        <div className={s.card}>
            <div className={s.pname}>
                <h3>{poke.name.toUpperCase()}</h3>
            </div>
            <div className={s.imgContainer}>
                <img alt='pokemon' src={poke.image} onClick={handleImgOnClick}/>
            </div>
            <div className={s.types}>
            <p>{poke.types.join(', ')}</p>
            </div>
        </div>
    )
}

export default Card;