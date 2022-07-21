import { useSelector } from 'react-redux';
import s from './SemiDet.module.css'

function SemiDet () {

    let poke = useSelector((state) => state.pokeDetail)

    function handleTipos() {
        if(poke.length===0) return <p className={s.resaltar}>"cargando"</p>
        if(poke.id.length>10){
            let x = poke.types.map((e)=>e.name)
            console.log(x)
            return <p className={s.resaltar}>{x.join(', ')}</p>
        }
        return <p className={s.resaltar}>{poke.types.join(', ')}</p>
    }

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
                {handleTipos()}
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