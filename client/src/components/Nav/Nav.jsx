import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div>
            <h1>Nav Bar</h1>
            <Link to='/home/create'>
             <button>Create</button>
            </Link>
        </div>
    )
}

export default Nav;