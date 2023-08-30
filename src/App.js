import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import AdSection from './components/AdSection';
import Main from './components/Main';
import PopularCryptos from './components/PopularCryptos';
import Portfolio from './components/Portfolio';
import Explore from './components/Explore';
import Protect from './components/Protect';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Main>
        <AdSection/>
        <PopularCryptos/>
        <Portfolio/>
        <Explore/>
        <Protect/>
      </Main>
    </div>
  );
}

export default App;
