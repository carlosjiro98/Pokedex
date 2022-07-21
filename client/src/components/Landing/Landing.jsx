
import { Link } from 'react-router-dom';
import s from './Landing.module.css'

function Landing () {

    return (
        <div className={s.mainC}>
            <div className={s.second}>
                <div className={s.wel}>
                    <h1>Bienvenido a tu <b className={s.resalt}>Pokedex</b></h1>
                </div>
                <div className={s.btn}>
                    <Link to='/home'>
                        <button>Entrar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;