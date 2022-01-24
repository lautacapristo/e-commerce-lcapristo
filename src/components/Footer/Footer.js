import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram, BsFillMapFill, BsMailbox, BsWhatsapp } from "react-icons/bs";

function Footer() {
    return (
        <div className="container-fluid row mFooter bg-grey">
            <div className="col-lg-3 icons ">
                <div className="c-white"> REDES SOCIALES </div>
                <div className="my-4 c-white"> < BsFacebook /> facebook.com/QUC </div>
                <div className="my-4 c-white"> < BsInstagram /> instagram.com/QUCcentral </div>
                
            </div> 
            <div className="col-lg-3">
                <div className="text-center c-white">MEDIOS DE PAGO</div>
                <div className="container my-1">  
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" className="my-2 mx-2 mediosDePago" alt="visa" ></img>  
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" className="my-2 mx-2 mediosDePago" alt="mastercard" ></img>  
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" className="my-2 mx-2 mediosDePago" alt="amex" ></img>
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" className="my-2 mx-2 mediosDePago" alt="diners" ></img>
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png" className="my-2 mx-2 mediosDePago" alt="ar_banelco" ></img>
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" className="my-2 mx-2 mediosDePago" alt="mercadopago" ></img>  
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png" className="my-2 mx-2 mediosDePago" alt="ar_argencard" ></img> 
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cencosud@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cencosud@2x.png" className="my-2 mx-2 mediosDePago" alt="ar_cencosud" ></img> 
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" className="my-2 mx-2 mediosDePago" alt="ar_tarjeta-naranja" ></img>
                <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png" className="my-2 mx-2 mediosDePago" alt="pagofacil" ></img> 
              
                    </div>
                </div> 
            <div className="col-lg-3 c-white text-center">
                <div className="my-4 contctoFooter"><BsFillMapFill className="mx-2" />Nos encontramos en Olavarria 1300</div>
                <div className="my-4 contatoFooter"> <BsMailbox    className="mx-2" /> Nuestro mail de contacto es quilmesurbanclothes@outlook.com </div>
                <div className="my-4 conactoFooter"> <BsWhatsapp   className="mx-2" /> Dudas particulares +011223463 </div>
                 </div> 
            <div className="col-lg-3 c-white derRev"> © Derechos Reservados </div>
        </div>
    )
}

export default Footer