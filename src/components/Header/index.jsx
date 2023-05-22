import { Container, Image } from "./styles";

const Header = ({image}) => (
    <Container>
        <Image src={image} />
        <h2>Loja Virtual</h2>
    </Container>
)

export default Header