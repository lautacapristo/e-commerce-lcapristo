const productos = [
    {id: 1, name: 'Piluso Champions',  categoria: 'gorras', price: '$3500', foto:'https://res.cloudinary.com/lauro177/image/upload/v1639403650/cards/jordan-jumpman-sombrero-tipo-pescador-destenido-CZz75L_tw0pof.jpg', caracteristica: 'Gorra estilo piluso', marca: ' Marca: champions' },
    {id: 2, name: 'Remera Nike', categoria: 'remeras', price: '$3600', foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639161149/cards/remeraNike_nhgpjx.jpg', caracteristica: 'Remera manga corta', marca: ' Marca: Nike'},
    {id: 3, name: 'Cinto Urbano', categoria: 'cintos', price:' $3422', foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639681120/cards/CintoClasicc_uwv8yy.jpg', caracteristica: 'Cinto estilo urbano', marca: ' Marca: Taverni'},
    {id: 4, name: 'Nike retro', categoria: 'pantalones', price: '$3233', foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639404317/cards/nikeentrenamiento_etcao0.jpg', caracteristica: 'Pantalon jogger', marca: ' Marca: Nike'},
    {id: 5, name: 'Adidas Retro', categoria: 'remeras', price: '$3113', foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639406896/cards/adidasclasic_asslxl.jpg', caracteristica: 'Remera retro', marca: ' Marca: Adidas'},
    {id: 6, name: 'Gorra Adidas', categoria: 'gorras', price: '$3800', foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639407002/cards/gorradidas_rmoyi7.jpg', caracteristica: 'Lentes estilo urbano', marca: ' Marca: Rayban'},
    {id: 7, name: 'Cinto Clasico', categoria: 'cintos', price: '$3540', foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639681310/cards/81-G1Y-KjFL._AC_UL1500__yajmik.jpg', caracteristica: 'Cinto Clásico', marca: ' Marca: Taverni'},
    {id: 8, name: 'Nike Retro', categoria: 'pantalones', price: '$3740', foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639404317/cards/nikesponsw_kpbwcj.jpg', caracteristica: 'Pantalon jogger retro', marca: ' Marca: Nike'},
    {id: 9, name: 'Adidas Retro', categoria: 'pantalones', price: '$3240', foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639404317/cards/adidas_wqwyzh.jpg', caracteristica: 'Pantalon jogger retro', marca: ' Marca: Adidas'},
    {id: 10, name: 'Remera Adidas', categoria: 'remeras', price: '$3940', foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639406526/cards/adidashomb_wd2spr.jpg', caracteristica: 'Remera manga corta', marca: ' Marca: Adidas'},
    {id: 11, name: 'Remera Adidas Retro', categoria: 'remeras', price: '$3710', foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639406526/cards/adidas2_ijs2gi.jpg', caracteristica: 'Remera manga corta', marca: ' Marca: Adidas'},
    {id: 12, name: 'Remera Corte Mujer', categoria: 'remeras', price: '$3460', foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639406526/cards/nikemujer_yjlgjz.jpg', caracteristica: 'Remera mujer', marca: ' Marca: Nike'}
]

export const task = new Promise((resolve) => {
 setTimeout(() => {
     resolve(productos)
 }, 2000)
})


