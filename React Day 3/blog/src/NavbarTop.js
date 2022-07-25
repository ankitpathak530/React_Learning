import './App.css';
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavbarTop() {
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-bar-link" to="/">Home</NavLink>

                            <NavDropdown className="nav-bar-link" title="About" id="collasible-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="about/privacyPolicy">Privacy Policy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="about/disclaimer">Disclaimer</Link>
                                </NavDropdown.Item>

                            </NavDropdown>
                            <NavLink className="nav-bar-link" to="/contact">Contact</NavLink>
                            <NavLink className="nav-bar-link" to="/filter">Filter</NavLink>

                        </Nav>
                        <Nav>
                            <NavLink className="nav-bar-link" to="/login">Login</NavLink>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* <ul className='navbar'>
                <li> <NavLink className="nav-bar-link" to="/">Home</NavLink> </li>
                <li>  <NavLink className="nav-bar-link" to="/about">About</NavLink>
                    <Link to="privacyPolicy">Privacy Policy</Link>
                  

                </li>
                <li>  ></li>
                <li></li>
            </ul> */}
        </div>
    );
}

export default NavbarTop;
