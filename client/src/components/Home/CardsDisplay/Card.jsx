import s from './Card.module.css';
function Card () {
    return (
        <div className={s.card}>
            <h3>Snorlax</h3>
            <img alt='pokemon' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg"/>
            <p>Agua, Fuego</p>
        </div>
    )
}

export default Card;