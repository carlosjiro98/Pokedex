import { Link } from 'react-router-dom';
function Create () {
    return (
        <div>
            <h1>Create</h1>
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Create;