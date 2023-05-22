import { useState } from "react";
import { Card, Image, ContainerTop, Counter, ContainerMiddle, ContainerBottom, Valor} from "./styles";
import { jogos } from "../../assets/constants/db";

const CardBox = () =>{
    const [selected, setSelected] = useState([])
    const handleChange = (e, index)=>{
        
        const activeData = document.getElementById(index).checked
        if(activeData === true){
            setSelected (oldData=>[...oldData,e.target.value])

        }else{
            setSelected(selected.filter(values=>values !==e.target.value))
        }
    }

    const handleClick = () =>{
        const selectedString = JSON.stringify(selected);
        localStorage.setItem("Selected", selectedString);
        window.location.href = ("http://localhost:5173/carrinho");
    }

    return(
        <div>
            <ContainerTop>
                <h1>Produtos</h1>
                <Counter>{selected.length}</Counter>
            </ContainerTop>
            <ContainerMiddle>
                {
                    jogos.map((jogos, i)=>
                        <Card key={i}>
                            <Image src={jogos.imagem}/>
                            <Valor>
                                <input type="checkbox" value={jogos.id} id={i} onChange={(e)=>handleChange(e, i)} />
                                <h3>Valor R${jogos.valor}</h3>
                            </Valor>
                        </Card>)
                }
            </ContainerMiddle>
            <ContainerBottom>
                <button onClick={handleClick}>Ir para o carrinho</button>
            </ContainerBottom>
        </div>)


} 

export default CardBox