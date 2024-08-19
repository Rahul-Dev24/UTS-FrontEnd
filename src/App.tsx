import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Layout/Home/Home'
import Splash from './Components/splashScreen/Splash'
import '../src/assets/style.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
