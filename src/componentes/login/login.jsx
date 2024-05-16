import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import "./login.css";

const login = () => {

    const [username, setUsername] = useState("")
    const [password, setUssetPasswordrname] = useState("")

    const handleSubmit = (event) => {
        event.prevenDefault();

        alert("Enviando os seus dados linda ❤️: " + username + " - " + password);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o Sistema</h1>

                <div className="input-field">
                    <input type="email" placeholder='E-mail' 
                    required
                    onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className="icon" />
                </div>

                <div className="input-field">
                    <input type="password" placeholder='Senha' 
                    onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembrar-me
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>Não possui uma conta? 
                        <a href="#">  Registrar-se</a>
                    </p>
                </div>

            </form>
        </div>
    );
}

export default login