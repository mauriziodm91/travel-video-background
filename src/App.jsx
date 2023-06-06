import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import SignUp from './pages/SignUp'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/products' Component={Products} />
        <Route path='/sign-up' Component={SignUp} />
        <Route path='/services' Component={Services} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
