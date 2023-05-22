import { Container } from "./styles";

const Footer = ({visa, master, boleto, hipercard})=>(
    <Container>
        <div style={{marginLeft: "20px"}}>
            <p>Meios de Pagamento</p>
            <img src={visa} alt="" />
        </div>
        <img src={master} alt="" />
        <img src={boleto} alt="" />
        <img src={hipercard} alt="" />
    </Container>
)

export default Footer