import { Link, Outlet } from 'react-router-dom';
import './App.css';

function About() {
    return (
        <div className="App">
            <h2>This is About page</h2>



            <Outlet />

        </div>
    );
}

export default About;
