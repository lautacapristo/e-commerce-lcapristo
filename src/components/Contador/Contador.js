import { useState } from 'react'

function Contador() {
//valor 1 inicializa, valor 2 lo cambia
const [ count, setCount ] = useState(0)

//funcion para subir el contador
const handler=() => {
    setCount(count+1)
}
const handler2=() => {
    setCount(count-1)
}

    return (
        <div> 
<button onClick={handler}>Sumar + </button>
<button onClick={handler2}>Restar - </button>

<p>{count} </p>

    </div>
    )
}


export default Contador 