import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext';
import Forms from  './components/Forms/Forms';

function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>   
          <NavBar/>  
          <Routes>
        
            <Route 
          exact
            path="/" element = {<ItemListContainer/> }
            />  
            <Route 
          exact
            path="/:idCate" element = {<ItemListContainer/> }
            /> 
            <Route 
          exact
            path="/cart" element = {<Cart/> }
            />   
                  
            <Route 
          exact
            path="/detalle/:ids" element = {<ItemDetailContainer/> }
            />  
            <Route 
          exact
            path="/cart/Form" element = {<Forms/> }
            />   
        
          </Routes>  
        </div>
      </BrowserRouter> 
    </CartContextProvider>
  );
}

export default App;
