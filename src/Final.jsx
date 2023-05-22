import Footer from "./components/Footer"
import Header from "./components/Header"
import FinalScreen from "./components/FinalScreen"
import Logo from "./assets/images/logo-arnia.png"
import Visa from "./assets/images/visa.png"
import Master from "./assets/images/master_card.png"
import Boleto from "./assets/images/boleto.png"
import Hiper from "./assets/images/hipercard.png"

function Final () {
    return(
        <div>
            <Header 
                image={Logo}/>
            <FinalScreen/>
            <Footer 
                visa={Visa}
                master={Master}
                boleto={Boleto}
                hipercard={Hiper}
            />
        </div>
    )

}

export default Final