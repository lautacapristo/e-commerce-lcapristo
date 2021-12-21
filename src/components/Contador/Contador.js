import { useState } from 'react'
import { Button } from 'react-bootstrap'

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
<button onClick={sumar}>Sumar + </button>
<button onClick={restar}>Restar - </button>

<p>{count} </p>
<Button variant="danger" size="lg" className="w-100" disabled = {count === 0} onClick= {agregar} > Agregar al carrito </Button>

    </div>
    )
}


export default Contador 