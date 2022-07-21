import { Link } from 'react-router-dom';
import s from './Nav.module.css'
import pb from '../../img/pb.png'

function Nav () {
    return (
        <div className={s.navContainer}>
            <div className={s.logo}>
                <img src={pb} alt="pb" />
                <h1>Pokedex</h1>
            </div>
            <div className={s.btns}>
                <Link to='/home/create'>
                <button>Create</button>
                </Link>
                <Link to='/home'>
                <button>Home</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Nav;