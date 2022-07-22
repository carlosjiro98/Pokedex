import s from './Controls.module.css';
import cruz from '../../../../img/cruzeta.png'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'

import {az, za, apiOrDb, attack, getHome, setSemi, dec} from '../../../../store/actions';
import Tipos from './Tipos';
import SemiHome from './SemiHome'
import SemiDet from './SemiDet'
import SemiSearch from './SemiSearch'

function Controls() {
    const history = useHistory()
    const dispatch = useDispatch();
    let [ind, setInd] = useState(0)
    let [name, setName] = useState("db")
    let [atOrder, setAtOrder] = useState(false)
    let semiIn = useSelector((state)=>state.semiIndicator)

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
        dispatch(setSemi("semiTipos"))
    }
    function handleHOME () {
        dispatch(getHome())
        dispatch(dec());
        dispatch(setSemi("semiHome"))
    }
    function handleSCH () {
        dispatch(setSemi("semiSer"))
    }
    function handleDET () {
        history.push('/home/detail')
    }
    function SemiRender() {
        switch(semiIn){
            case "semiTipos": return <Tipos/>
            case "semiDet": return <SemiDet/>
            case "semiSer": return <SemiSearch/>
            default: return <SemiHome/>
        }
    }
/* ---------------------------------------------- Renderizado --------------------------------------- */
    return (
        <div className={s.mainContainer}>

            <div className={s.semiDetail}>
                {SemiRender()}
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
                    <div className={s.circle} onClick={handleSCH}>
                        <div className={s.find}>Buscar</div>
                    </div>
                    <div className={s.circle} onClick={handleDET}>
                        <div className={s.detail}>Detalle</div>
                    </div>
                    <div className={s.home}>
                        <img src={cruz} alt="cruzeta" onClick={handleHOME}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Controls;