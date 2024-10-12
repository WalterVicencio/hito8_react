import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbarr from './Navbar';
import Footer from './Footer';
import ReactDOM from "react-dom/client";
import {Route,Routes, Navigate} from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Pizza from './Pages/Pizza';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';
import Navegacion from './Navegacion';
import Profile from './Pages/Profile';
import NoEncontrada from './Pages/NoEncontrada';
import CartProvider from './Context/CartContext';
import Cart2 from './Pages/Cart2';
import { CartContext } from './Context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//import Cart from './Cart';

//import Register from './Register';
//import Login from './Login';

function App() {

  const {token} =useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Navegacion />
       {/* <Navbarr />*/} 
        {/*<Home />*/} 
        <Cart />
        {/*<Register />*/}
        {/*<Login />*/}
        {/*<Pizza />*/}
        
        <Routes>
        <Route 
            path="/home"
            element={<Home/>}
          />
        <Route 
            path="/register"
            element={<Register/>}
          />
          <Route 
            path="/login"
            element={<Login/>}
          />
          <Route 
            path="/cart"
            element={<Cart/>}
          />
          <Route 
            path="/pizza/p001"
            element={<Cart/>}
          />
          <Route 
            path="/pizzas/:id"
            element={<Cart2/>}
          />
          <Route 
            path="/profile"
            element={token ? <Profile /> : navigate("/home")}
          />
        <Route 
            path="404"
            element={<NotFound/>}
          />

        </Routes>


        <Footer />       
      </div>  
      
    </>
  )
}

export default App
