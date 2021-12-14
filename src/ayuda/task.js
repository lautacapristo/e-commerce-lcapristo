const productos = [
    {id: 1, name: 'gorra',  categoria: 'gorras', price: `$3500`, foto:'https://res.cloudinary.com/lauro177/image/upload/v1639403650/cards/jordan-jumpman-sombrero-tipo-pescador-destenido-CZz75L_tw0pof.jpg' },
    {id: 2, name: 'remera', categoria: 'remeras', price: 3600, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639161149/cards/remeraNike_nhgpjx.jpg'},
    {id: 3, name: 'lentes', categoria: 'lentes', price: 3422, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639403976/cards/Converse-13_vvvxgq.jpg'},
    {id: 4, name: 'pantalon', categoria: 'pantalones', price: 3233, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639404317/cards/nikeentrenamiento_etcao0.jpg'},
    {id: 5, name: 'remera2', categoria: 'remeras', price: 3113, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639406896/cards/adidasclasic_asslxl.jpg'},
    {id: 6, name: 'gorra2', categoria: 'gorras', price: 3800, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639407002/cards/gorradidas_rmoyi7.jpg'},
    {id: 7, name: 'lentes2', categoria: 'lentes', price: 3540, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639403991/cards/descarga_hp5aua.jpg'},
    {id: 8, name: 'pantalon2', categoria: 'pantalones', price: 3740, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639404317/cards/nikesponsw_kpbwcj.jpg'},
    {id: 9, name: 'pantalon3', categoria: 'pantalones', price: 3240, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639404317/cards/adidas_wqwyzh.jpg'},
    {id: 10, name: 'remera3', categoria: 'remeras', price: 3940, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639406526/cards/adidashomb_wd2spr.jpg'},
    {id: 11, name: 'remera4', categoria: 'remeras', price: 3710, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639406526/cards/adidas2_ijs2gi.jpg'},
    {id: 12, name: 'remera5', categoria: 'remeras', price: 3460, foto: 'https://res.cloudinary.com/lauro177/image/upload/v1639406526/cards/nikemujer_yjlgjz.jpg'}
]

export const task = new Promise((resolve) => {
 setTimeout(() => {
     resolve(productos)
 }, 2000)
})


