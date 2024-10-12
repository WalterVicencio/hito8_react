import img from './assets/img/header.jpg';

const Header= ({titulo="Titulo por defecto",descripcion="Descripcion por defecto"}) => {

    return(
        <>
        <div className="header-container">
            <img src={img} className='img-header'  ></img>
            
            <div className='text-header'>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <hr style={{ width: 1500,opacity: .5,color: "white", backgroundColor: "white", height: 1}} />
            </div>
        </div>
        
        </>
    ) 
}

export default Header;