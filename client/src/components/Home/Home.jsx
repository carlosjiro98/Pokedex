import s from './Home.module.css';
//Components
import CardsDisplay from './CardsDisplay/CardsDisplay';

function Home () {
    return (
        <div className={s.homeContainer}>
            <CardsDisplay/>
        </div>
    )
}

export default Home;