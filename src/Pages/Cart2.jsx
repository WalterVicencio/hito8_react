import {useContext, useState, useEffect } from "react"
import CardPizza from "../CardPizza"
import { ListaPizzas } from "../pizzas"
import { CartContext } from "../Context/CartContext"
import {useParams} from "react-router-dom"


const Cart2 = () => {

    const {id} =useParams();
    console.log({id})

    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] =useState(true);
    const [error, setError] =useState(false);

    useEffect(() => {
        const fetchPizzas = async () =>{
            
            try{
                const url=`http://localhost:5000/api/pizzas/${id}`;
                const response = await fetch(url);
                const data = await response.json();
                setPizzas(data);
            }catch(error){
                setError(error);
            } finally{
                setLoading(false);
                console.log(pizzas);
            }

        }
        fetchPizzas();
    });


    

    return(
        <>
        <div className='cards'>
            {loading && <p>Loading...</p>}
            {!loading && error && <p>{error}</p>}
                {!loading && 
                            <CardPizza
                                name={pizzas.name}
                                price={pizzas.price}
                                ingredients={pizzas.ingredients}
                                img={pizzas.img}
                                id={pizzas.id} />
                        }
        </div>
        </>
    )

}

export default Cart2