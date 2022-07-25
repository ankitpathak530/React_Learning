import './App.css';
import { useLocation } from "react-router-dom"

function Home() {

    const location = useLocation();
    console.log(location);


    return (
        <div className="App">
            <h2>This is Home page</h2>
        </div>
    );
}

export default Home;
