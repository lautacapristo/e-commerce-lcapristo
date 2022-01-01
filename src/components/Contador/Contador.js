import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { BsChevronCompactUp, BsChevronCompactDown } from "react-icons/bs";
import './Contador.css'
function Contador({stock, onAdd}) {
//valor 1 inicializa, valor 2 lo cambia
const [ count, setCount ] = useState(1)


//useEfect

//funcion para subir el contador
const sumar=() => {
    //mientras el numero sea diferente a stock, voy a sumar uno. (
    count !== stock && setCount(count + 1) 
    
   
}
const restar=() => {
    //cuando el numero sea diferente a 1 resto, pero cuando llegue a 0 frena.
    count !== 0 && setCount(count -1)
}

const agregar = () => {
    onAdd(count)
}


    return (
        <div> 
          <h6 className="my-2"> Cantidad</h6>
<button onClick={sumar} className="buttonContador my-4" > <BsChevronCompactUp /> </button>
<button onClick={restar}className="buttonContador"><BsChevronCompactDown />  </button>
<p className="bordeCount">{count} </p>

<Button variant="dark" size="lg" className="w-100 bg-oscuro" disabled = {count === 0} onClick= {agregar} > <em className="c-white">Agregar al carrito</em> </Button>

    </div>
    )
}


export default Contador 