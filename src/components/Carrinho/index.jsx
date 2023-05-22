
import { jogos } from "../../assets/constants/db";
import { ContainerMiddle, ContainerTop, Counter, Image, Item, Title, Button, ContainerBottom } from "./styles";
const Carrinho = ()=>{
    const itemserial = localStorage.getItem("Selected")
    const item = JSON.parse(itemserial)
    const gamesSelected = jogos.filter(jogo => item.map(Number).includes(jogo.id));


    return(
        <>
            <ContainerTop>
                <h1>Carrinho</h1>
                <Counter>{item.length}</Counter>
            </ContainerTop>
            <ContainerMiddle>
                {   
                    gamesSelected.map((games) =>
                    
                    
                        <Item>
                            <Image src={games.imagem}/>
                            <div>
                            <Title>{games.nome}</Title>
                            <h3>Valor: R${games.valor}</h3>
                            <h3>Quantidade: {games.count}</h3>
                            <Button >+</Button>
                            <Button >-</Button>
                            </div>
                        </Item>
                )}
            </ContainerMiddle>
            <ContainerBottom>
                <h3>Total: R${gamesSelected.length * 10.00},00</h3>
                <a href="http://localhost:5173/final"><button style={{marginTop:"25px"}}>Finalizar Compra</button></a>
            </ContainerBottom>
                
            </>
    )

}


export default Carrinho