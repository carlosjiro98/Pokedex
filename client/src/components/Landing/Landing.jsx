
import { Link } from 'react-router-dom';
import {inc, dec, getMain} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

function Landing () {
    let dispatch = useDispatch();
    let count = useSelector((state) => state.count);
    let pokes = useSelector((state) => state.mainPokes);
    return (
        <div>
            <h1>Landing</h1>
            <Link to='/home'>
                <button>Entrar</button>
            </Link>
            <div>
                <h1>counter: {count}</h1>
                <button onClick={()=>dispatch(inc())}>inc</button>
                <button onClick={()=>dispatch(dec())}>dec</button>
            </div>
            <div>
                <h1>lista:</h1>
                <button onClick={()=>dispatch(getMain())}>Traer</button>
                {pokes ? pokes.map((p) => <div key={p.id}>{p.name}</div>): "sin pokes"}
            </div>
        </div>
    )
}

export default Landing;