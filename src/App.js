import Navigation from './components/Navigation';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
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
import CoinPage from './components/pages/CoinPage';
import AllCoins from './components/pages/AllCoins';
import Buy from './components/pages/Buy';
import ErrorPage from './components/pages/ErrorPage';

function App() {
  return (
      <div className="App">
 
      <Routes>
        
        <Route exact path='/' element=
        {<>
          <Navigation />
          <Header />
          <Main> 
            <BannerSection />
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
        <Route path='/coin' element={<><Navigation/><CoinPage/></>}>
          <Route path=':coinId' element={<CoinPage/>}/>
        </Route>
        <Route exact path='/coininfo' element={<><Navigation/><AllCoins/></>}/>
        <Route exact path='/buy' element={<><Navigation/><Buy/></>}/>
        <Route exact path='/finance' element={<><Navigation/><ErrorPage/></>}/>
        <Route exact path='/more' element={<><Navigation/><ErrorPage/></>}/>
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
