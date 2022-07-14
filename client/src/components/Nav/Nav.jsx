import { Link } from 'react-router-dom';
import s from './Nav.module.css'

function Nav () {
    return (
        <div className={s.navContainer}>
            <h1>Nav Bar</h1>
            <Link to='/home/create'>
             <button>Create</button>
            </Link>
            <Link to='/home'>
             <button>Home</button>
            </Link>
        </div>
    )
}

export default Nav;