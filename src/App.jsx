import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loja from "./Loja";
import Cart from "./Cart";
import Final from "./Final"
function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Loja/>}/>
                    <Route path="/carrinho" element={ <Cart/>} />
                    <Route path="/final" element={ <Final/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App