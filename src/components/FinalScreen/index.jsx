import { jogos } from "../../assets/constants/db";
import { ContainerTop, ContainerMiddle, Image, ContainerBottom, Text, Button } from "./styles";


const itemserial = localStorage.getItem("Selected")
const item = JSON.parse(itemserial)
const gamesSelected = jogos.filter(jogo => item.map(Number).includes(jogo.id));

const FinalScreen = () =>{


    return(

        <div>
        <ContainerTop>
            <h1>Checkout</h1>
        </ContainerTop>
        <ContainerMiddle>{
            gamesSelected.map ((games)=>
                <Image src={games.imagem}/>
            )}
        </ContainerMiddle>
        <ContainerBottom>
            <Text>Total de Produtos: {gamesSelected.length}</Text>
            <Text>Total: R${gamesSelected.length * 10},00</Text>
        </ContainerBottom>
        <Button>Confirmar Compra</Button>
        </div>
    )


}

export default FinalScreen