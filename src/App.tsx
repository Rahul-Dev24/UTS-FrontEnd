import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Layout/Home/Home'
import Splash from './Components/splashScreen/Splash'
import '../src/assets/style.css';
import StationSearch from './Components/stationSearch/StationSearch';
import GetFare from './Components/getFare/GetFare';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/:url' element={<Home />} />
          <Route path="/stationSearch/:url" element={<StationSearch />} />
          <Route path="/getFare" element={<GetFare />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
