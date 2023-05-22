import Footer from "./components/Footer"
import Header from "./components/Header"
import Carrinho from "./components/Carrinho"
import Logo from "./assets/images/logo-arnia.png"
import Visa from "./assets/images/visa.png"
import Master from "./assets/images/master_card.png"
import Boleto from "./assets/images/boleto.png"
import Hiper from "./assets/images/hipercard.png"

function Cart () {
    return(
        <div>
            <Header 
                image={Logo}/>
            <Carrinho />
            <Footer 
                visa={Visa}
                master={Master}
                boleto={Boleto}
                hipercard={Hiper}
            />
        </div>
    )

}

export default Cart