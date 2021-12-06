const productos = [
    {id: 1, description: 'numero 1', precio: 35},
    {id: 2, description: 'numero 2', precio: 36},
    {id: 3, description: 'numero 3', precio: 34},
    {id: 4, description: 'numero 4', precio: 32},
    {id: 5, description: 'numero 5', precio: 31},
    {id: 6, description: 'numero 6', precio: 38}
]

export const task = new Promise((resolve) => {
 setTimeout(() => {
     resolve(productos)
 }, 3000)
})
