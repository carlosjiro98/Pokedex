import { Link } from 'react-router-dom';
import s from './Home.module.css';
//Components
import CardsDisplay from './CardsDisplay/CardsDisplay';

function Home () {
    return (
        <div className={s.homeContainer}>
            <div className={s.filterSim}>
                <h1>Home</h1>
                <Link to='/home/detail'>
                <button>Detail</button>
                </Link>
            </div>
            <CardsDisplay/>
        </div>
    )
}

export default Home;