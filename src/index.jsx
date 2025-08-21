import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headers from './Components/Headers'
import Footer from './Components/Footer'
import Main from './Pages/Main'
import Menu from './Pages/Menu'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Headers/>
    <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/menu' element={<Menu/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
)
