import Navbar from './Componentes/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import Cart from './Componentes/Cart/Cart';
import Checkout from './Componentes/Checkout/Checkout';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
          <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer /> } />
            <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/checkout' element = {<Checkout/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App