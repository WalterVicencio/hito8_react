
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [val, setVal] = useState(true)

    const validarDatos = (e) => {
        e.preventDefault()
        //Validación
        console.log(email.length)
        if (!email.trim() || !contraseña.trim()) {
            setError1(true);
            if (contraseña.length<6) {
                setError2(true);
            return;
            } else{
                setError2(false);
            }
        return;
        }
        if (contraseña.length<6) {
            setError2(true);
            setError1(false);
        return;
        }

        setError1(false);
        setError2(false);
        setVal(false);
        setEmail('');
        setContraseña('');
    }
        


    return(
        <>
        <form onSubmit={validarDatos} className="formulario">
            {error1 ? <p>Todos los campos son obligatorios</p> : null}
            {error2 ? <p>El password debe tener al menos 6 caracteres</p> : null}
            {error1 ? null : error2 ? null : val ? null : <p>Autentificación exitosa</p>}
            <h1>Login</h1>
            <div className="form-group">
                <label>Email</label>
                <input
                type="text"
                name="nombre"
                className="form-control"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input
                type="password"
                name="apellido"
                className="form-control"
                onChange={(e)=> setContraseña(e.target.value)}
                value={contraseña}
                />
            </div>
            
            <button type="submit" className="btn
            btn-primary">Enviar</button>
            </form>
        </>
    )
}

export default Login