import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './Detail.module.css'
function Detail () {

    let pokeD = useSelector((state) => state.pokeDetail) 

    function handleTipos() {
        if(pokeD.length===0) return <p className={s.resInfo}>"cargando"</p>
        if(pokeD.id.length>10){
            let x = pokeD.types.map((e)=>e.name)
            return <p className={s.resInfo}>{x.join(', ')}</p>
        }
        return <p className={s.resInfo}>{pokeD.types.join(', ')}</p>
    }

    return <div className={s.mainC}>
            <div className={s.card}>

                <div className={s.imgHome}>
                    <img src={pokeD.image} alt="poke" />
                </div>

                <div className={s.info}>
                    <div className={s.nameC}>
                        <p>Nombre: </p>
                        <p className={s.resInfo}>{pokeD.name || "cargando..."}</p>
                    </div>
                    <div className={s.nameC}>
                        <p>Tipo:</p>
                        {handleTipos()}
                        {/* <p className={s.resInfo}>{pokeD.length===0 ? "cargando" : pokeD.types.join(', ')}</p> */}
                    </div>
                    <div className={s.nameC}>
                        <p>Id: <b className={s.resInfo}>{pokeD.id || "cargando..."}</b></p>
                    </div>
                    <div className={s.stats}>
                        <div><p>Altura: <b className={s.resaltar}>{pokeD.height || "0"}</b></p></div>
                        <div><p>Peso: <b className={s.resaltar}>{pokeD.weight || "0"}</b></p></div>
                        <div><p>Vida: <b className={s.resaltar}>{pokeD.hp || "0"}</b></p></div>
                        <div><p>Ataque: <b className={s.resaltar}>{pokeD.attack || "0"}</b></p></div>
                        <div><p>Defensa: <b className={s.resaltar}>{pokeD.defense || "0"}</b></p></div>
                        <div><p>Velocidad: <b className={s.resaltar}>{pokeD.speed || "0"}</b></p></div>
                    </div>
                    <div className={s.btn}>
                        <Link to='/home'>
                            <button>Home</button>
                        </Link>
                    </div>
                </div>
            </div>  
        </div>
}

export default Detail;