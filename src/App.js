// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  
  return (
    // <BrowserRouter>
    <div>   
        <NavBar/>  
        {/* <Routes>
        {/* <Contador/> */}
        {/* <Route 
          exact
            path="/categoria" element = {<ItemListContainer/> }
            /> */} 


         <ItemListContainer/> 
       <ItemDetailContainer/>    
        {/* </Routes>  */}
    </div>
    // {/* </BrowserRouter> */}
  );
}

export default App;
