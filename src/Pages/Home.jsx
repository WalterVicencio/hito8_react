import Header from '../Header';
import CardPizza from '../CardPizza';
import { ListaPizzas } from '../pizzas';
import { useState, useEffect } from 'react';

const Home = () => {

    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] =useState(true);
    const [error, setError] =useState(false);
    
    useEffect(() => {
        const fetchPizzas = async () =>{
            
            try{
                const url="http://localhost:5000/api/pizzas/";
                const response = await fetch(url);
                const data = await response.json();
                setPizzas(data);
            }catch(error){
                setError(error);
                console.log(error);
            } finally{
                setLoading(false);
            }

        }
        fetchPizzas();
    }, []);


    return(
        <>
        
        <Header 
            titulo="¡Pizzería Mamma Mia!"
            descripcion="¡Tenemos las mejores pizzas que podrás encontrar!"
        />
        {
        <div className='cards'>

            {loading && <p>Loading...</p>}
            {!loading && pizzas.map((pizza)=>{
                    return(
                        <CardPizza
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img} />
                    )
                })  }
                
            
        
        {/*ListaPizzas.map ( pizza =>
            <CardPizza
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            />
        ) */}  

        
        </div>
        }
        </>
    ) 
}

export default Home;