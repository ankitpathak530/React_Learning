import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';


function App() {
  return (
    <div className="App">
      <h1>App Component</h1>

      <HeaderContainer />
      <HomeContainer />

    </div>
  );
}

export default App;
