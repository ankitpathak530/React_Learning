import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();


    return (
        <div>
            <h2>Home Page</h2>
            <p>This is Home page</p>


            <button onClick={() => navigate('/about')}>Go to About Page</button>
            <button onClick={() => navigate('/filter')}>Go to Filter Page</button>
        </div>
    )
}
export default Home;