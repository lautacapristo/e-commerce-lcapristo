import { useState } from 'react'

function Contador() {
//valor 1 inicializa, valor 2 lo cambia
const [ count, setCount ] = useState(0)


//useEfect

//funcion para subir el contador
const handler=() => {
    setCount(count+1)
    
   
}
const handler2=() => {
    setCount(count-1)
}
console.log(count);

    return (
        <div> 
<button onClick={handler}>Sumar + </button>
<button onClick={handler2}>Restar - </button>

<p>{count} </p>

    </div>
    )
}


export default Contador 