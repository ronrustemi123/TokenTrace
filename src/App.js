import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import AdSection from './components/AdSection';
import Main from './components/Main';
import PopularCryptos from './components/PopularCryptos';
import Portfolio from './components/Portfolio';
import Explore from './components/Explore';
import Protect from './components/Protect';
import Help from './components/Help';
import Earn from './components/Earn';
import Footer from './components/Footer';

import {Routes, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';

function App() {
  return (
      <div className="App">
      <Routes>
        <Route exact path='/TokenTrace' element=
        {<>
          <Navigation />
          <Header />
          <Main> 
            <AdSection />
            <PopularCryptos />
            <Portfolio /><Explore />
            <Protect /> 
            <Help />  
            <Earn />
          </Main>
        </>}>
        </Route>
        <Route exact path='/signup' element={<SignUp />} /><Route />
        <Route exact path='/login' element={<LogIn/>} /><Route />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
