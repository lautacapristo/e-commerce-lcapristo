 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 // import { Link } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  
  return (
     <BrowserRouter>
    <div>   
        <NavBar/>  
         <Routes>
        {/* <Contador/> */}
        <Route 
          exact
            path="/" element = {<ItemListContainer/> }
            />  
        <Route 
          exact
            path="/categoria/:idCate" element = {<ItemListContainer/> }
            />  
            <Route 
          exact
            path="/remeras" element = {<ItemListContainer/> }
            />  
            <Route 
          exact
            path="/gorras" element = {<ItemListContainer/> }
            />  
            <Route 
          exact
            path="/lentes" element = {<ItemListContainer/> }
            />  
            <Route 
          exact
            path="/detalle" element = {<ItemDetailContainer/> }
            />  
         {/* <ItemListContainer/>  */}
       {/* <ItemDetailContainer/>     */}
         </Routes>  
    </div>
      </BrowserRouter> 
  );
}

export default App;
