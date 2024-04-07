
import CoinDetails from './Components/CoinDetails';
import Coins from './Components/Coins';
import Exchanges from './Components/Exchanges';
// import Header from './Components/Header';
import OurModel from './Components/OurModel';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Exchanges />} />
      <Route path='/coins' element={<Coins />} />
      <Route path='/coins/:id' element={<CoinDetails />} />
      {/* <Route path='/' element={<Header />} /> */}
      <Route path='/ourmodel' element={<OurModel />} />

    </Routes>


  );
}

export default App;
