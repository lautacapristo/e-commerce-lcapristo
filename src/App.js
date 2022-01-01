 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 // import { Link } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
 import Cart from './components/Cart/Cart';
 import CartContextProvider from './Context/CartContext';


 
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
            
        
         </Routes>  
    </div>
      </BrowserRouter> 
      </CartContextProvider>
  );
}

export default App;
