import s from './Card.module.css';
function Card ({poke}) {
    return (
        <div className={s.card}>
            <div className={s.pname}>
                <h3>{poke.name.toUpperCase()}</h3>
            </div>
            <div className={s.imgContainer}>
                <img alt='pokemon' src={poke.image}/>
            </div>
            <div className={s.types}>
            <p>{poke.types.join(', ')}</p>
            </div>
        </div>
    )
}

export default Card;