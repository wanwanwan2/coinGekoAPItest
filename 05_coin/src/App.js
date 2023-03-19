import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import About from './pages/About';
import Coin from './pages/Coin';
import Main from './pages/Main';
import CoinDetails from './pages/CoinDetails';
import CoinSearchResult from './pages/CoinSearchResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="about" element={ <About/> }/>
          <Route path="coin">
            <Route index element={ <Coin/> }/>
            <Route path=":id" element={ <CoinDetails/> }/>
            <Route path="search" element={ <CoinSearchResult/> }/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
