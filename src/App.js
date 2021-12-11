
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  
  return (
    
    <div>   
        <NavBar/>  
        <Contador/>
        <ItemListContainer/>
        <ItemDetailContainer/>    
    </div>
  );
}

export default App;
