import s from './Controls.module.css';
import cruz from '../../../../img/cruzeta.png'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

import {az, za, apiOrDb, attack, getType} from '../../../../store/actions';
import Tipos from './Tipos';

function Controls() {

    const dispatch = useDispatch();
    let [ind, setInd] = useState(0)
    let [name, setName] = useState("DB")
    let [atOrder, setAtOrder] = useState(false)

    function handleAOD () {
        if (ind === 0) {
            return setInd(ind + 1)
        }else if (ind === 1) {
            return setInd(ind + 1)
        }else if (ind === 2) {
            return setInd(ind - 2)
        }
    }

    useEffect(()=>{
        if(ind === 0) {
            setName("DB");
            dispatch(apiOrDb("all"));
        }
        if(ind === 1) {
            setName("API");
            dispatch(apiOrDb("db"));
        }
        if(ind === 2) {
            setName("ALL");
            dispatch(apiOrDb("api"));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ind]);

    function handleAT () {
        dispatch(attack(!atOrder));
        setAtOrder(!atOrder);
    }
    function handleTY () {
        console.log('types')
        dispatch(getType());
    }

    return (
        <div className={s.mainContainer}>

            <div className={s.semiDetail}>
                <Tipos/>
            </div>

            <div className={s.controls}>
                <div className={s.deco}>
                    <div className={s.deco1}></div>
                    <div className={s.deco2}></div>
                </div>

                <div className={s.filters}>
                    <div className={s.filterBtn} id={s.left} onClick={()=>dispatch(az())}>A-Z</div>
                    <div className={s.filterBtn} onClick={()=>dispatch(za())}>Z-A</div>
                    <div className={s.filterBtn} onClick={()=>handleAT()}>ATAQUE<br/>{atOrder ? "DSC": "ASC"}</div>
                    <div className={s.filterBtn} onClick={()=>handleAOD()}>{name}</div>
                    <div className={s.filterBtn} id={s.right} onClick={()=>handleTY()}>TIPO</div>
                </div>
                
                <div className={s.nav}>
                    <div className={s.circle}>
                        <div className={s.find}>Buscar</div>
                    </div>
                    <div className={s.circle}>
                        <div className={s.detail}>Detalle</div>
                    </div>
                    <div className={s.home}>
                        <img src={cruz} alt="cruzeta" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Controls;