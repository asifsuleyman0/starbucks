import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headers from './Components/Headers'
import Footer from './Components/Footer'
import Main from './Pages/Main'
import Menu from './Pages/Menu'
import Giftcards from './Pages/Giftcards'
import CreateGift from './Components/CreateGift'
import CategoryDetail from './Components/SubMenus'
import ProductDetail from './Components/Details'
import List from './Components/List'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Headers/>
    <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/menu' element={<Menu />}>
          <Route index element={<List />} />
          <Route path=":categoryId" element={<CategoryDetail />} />
        </Route>
        <Route path="/menu/:categoryId/product/:id" element={<ProductDetail />} />
        <Route path='/gift' element={<Giftcards/>} />
        <Route path="/gift/:productNumber" element={<CreateGift />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
)
