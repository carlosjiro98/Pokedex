import { Link } from 'react-router-dom';
function Detail () {
    return (
        <div>
            <h1>Detail</h1>
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Detail;