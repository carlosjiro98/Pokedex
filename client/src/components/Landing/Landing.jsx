
import { Link } from 'react-router-dom';

function Landing () {

    return (
        <div>
            <h1>Landing</h1>
            <Link to='/home'>
                <button>Entrar</button>
            </Link>
        </div>
    )
}

export default Landing;