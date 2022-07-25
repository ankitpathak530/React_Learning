import { Link, NavLink } from 'react-router-dom'
import style from './Style1.module.css'
import './App.css'

function Navbar() {
    return (
        <div class="App">
            <ul className={style.navbar}>
                <li> <NavLink className="nav-bar-link" to="/">Home</NavLink> </li>
                <li>  <NavLink className="nav-bar-link" to="/about">About</NavLink></li>

                <li>  <NavLink className="nav-bar-link" to="/contact">Contact</NavLink></li>
                <li> <NavLink className="nav-bar-link" to="/filter">Filter</NavLink> </li>

            </ul>


        </div>
    )
}

export default Navbar;