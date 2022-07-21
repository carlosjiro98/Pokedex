import { useSelector } from 'react-redux';
import s from './SemiDet.module.css'
function SemiDet () {
    let poke = useSelector((state) => state.pokeDetail)
    console.log(poke)
    return <div className={s.mainC}>
        <div className={s.pokeimg}>
            {poke.length===0 ? "cargando..." : <img src={poke.image} alt="bb" />}
        </div>
        <div className={s.pokeinfo}>
            <div className={s.juntar}>
                <p>Nombre:</p>
                <p className={s.resaltar}><b>{poke.name || "cargando..."}</b></p>
            </div>
            <div className={s.juntar}>
                <p>tipo:</p>
                <p className={s.resaltar}>{poke.length===0 ? "cargando" : poke.types.join(', ')}</p>
            </div>
            
            <div className={s.juntar}>
                <p>ATAQUE: <b className={s.resaltar}> {poke.attack || "cargando..."}</b></p>
            </div>
            <div className={s.juntarx}>
                <p>id:</p>
                <p className={s.resaltarid}>{poke.id || "cargando..."}</p>
            </div>
        </div>
    </div>
}

export default SemiDet;

//poke.length>0 ? poke.name : "cargando..."