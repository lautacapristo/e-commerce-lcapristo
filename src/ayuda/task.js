const productos = [
    {id: 1, name: 'gorra',  description: 'numero 1', price: `$3500`, foto:'https://res.cloudinary.com/lauro177/image/upload/v1639161149/cards/remeraNike_nhgpjx.jpg' },
    {id: 2, name: 'remera', description: 'numero 2', price: 3600, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639161149/cards/remeraNike_nhgpjx.jpg'},
    {id: 3, name: 'lentes', description: 'numero 3', price: 3422, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639161149/cards/remeraNike_nhgpjx.jpg'},
    {id: 4, name: 'pantalon', description: 'numero 4', price: 3233, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639161149/cards/remeraNike_nhgpjx.jpg'},
    {id: 5, name: 'cinto', description: 'numero 5', price: 3113, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639161149/cards/remeraNike_nhgpjx.jpg'},
    {id: 6, name: 'zapatillas', description: 'numero 6', price: 3800, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639161149/cards/remeraNike_nhgpjx.jpg'}
]

export const task = new Promise((resolve) => {
 setTimeout(() => {
     resolve(productos)
 }, 2000)
})


