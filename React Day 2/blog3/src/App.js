import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Page404 from './Page404'
import User from './User';
import Filter from './Filter';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
