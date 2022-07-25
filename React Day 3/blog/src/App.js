import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavbarTop from './NavbarTop';
import Page404 from './Page404'
import Filter from './Filter';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';
import Dislaimer from './Disclaimer';
import Login from './Login';
import Protected from './Protected';


function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <App2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/filter" element={<Protected Component={Filter} />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/about/" element={<About />} >
            <Route path="privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="disclaimer" element={<Dislaimer />} />
          </Route>
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
