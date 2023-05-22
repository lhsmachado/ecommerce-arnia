import Header from "./components/Header"
import Footer from "./components/Footer"
import CardBox from "./components/CardBox"
import Logo from "./assets/images/logo-arnia.png"
import Visa from "./assets/images/visa.png"
import Master from "./assets/images/master_card.png"
import Boleto from "./assets/images/boleto.png"
import Hiper from "./assets/images/hipercard.png"

function Loja(){
    return (
        <div>
            <Header 
            image={Logo}/>
            <CardBox/>
            <Footer 
                visa={Visa}
                master={Master}
                boleto={Boleto}
                hipercard={Hiper}
            />
            
        </div>
    )
}

export default Loja