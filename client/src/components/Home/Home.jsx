import { Link } from 'react-router-dom';
function Home () {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/home/detail'>
             <button>Detail</button>
            </Link>
        </div>
    )
}

export default Home;