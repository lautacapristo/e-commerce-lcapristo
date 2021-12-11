const itemProd = [
    {id: 1, name: 'gorra',  description: 'numero 1', price: `$3500`, foto:'https://res.cloudinary.com/lauro177/image/upload/v1639161149/cards/remeraNike_nhgpjx.jpg' }
]

 const promiseDetail = new Promise((resolve) => {
    setTimeout(() => {
        resolve(itemProd)
    }, 4000)
   })
   

   export default promiseDetail