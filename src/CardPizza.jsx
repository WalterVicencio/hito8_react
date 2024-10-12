import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgpizza from './assets/img/pizza.png';
import imgcarro from './assets/img/carro.png';
import { useNavigate} from "react-router-dom";

const CardPizza = ({name,price,ingredients,img,id})=>{

    const navigate = useNavigate();
    const irAPizzas = () => {
      navigate(`/pizzas/${id}`);
    };

    const listado=ingredients.map((ingre)=>
        <li>{ingre},</li>
    );
    return (
        <Card style={{ width: '20rem' }}>
      <Card.Img className='img-card' variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
        <hr style={{ width: "100%",opacity: .5,color: "grey", backgroundColor: "grey", height: 1}} />
        <p>Ingredientes:</p>
        <Card.Text style={{display: "flex",flexDirection:"row",justifyContent: "center"}}>
        <div style={{marginLeft:10, display: "Block", fontSize:14, textAlign: "center"}}><img src={imgpizza} style={{width:10,height:20}}></img>{listado}</div>
        </Card.Text>
        <hr style={{ width: "100%",opacity: .5,color: "grey", backgroundColor: "grey", height: 1}} />
        <h3>Precio: ${price.toLocaleString("de-DE")}</h3>
        <div className='botones-card'>
        <Button variant="outline-dark" onClick={ irAPizzas }>Ver más</Button>
        {/*<Button variant="dark"><img src={imgcarro} style={{width:20,marginRight:5}}></img>Añadir</Button>*/}
        </div>
      
      </Card.Body>
    </Card>
    )
}

export default CardPizza