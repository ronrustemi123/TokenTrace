import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import AdSection from './components/AdSection';
import Main from './components/Main';
import PopularCryptos from './components/PopularCryptos';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Main>
        <AdSection/>
        <PopularCryptos/>
      </Main>
    </div>
  );
}

export default App;
