import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const NoEncontrada = () => {
  return (
    <Container>
      <h1 >La ruta que intentas consultar no existe :/</h1>
      <h3 >Lamentamos el inconveniente</h3>
      <Link to="/" className="btn bg-primary text-white ms-3 text-decoration-none">
        Home
      </Link>
    </Container>
  );
};
export default NoEncontrada;
