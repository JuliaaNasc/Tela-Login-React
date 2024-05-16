import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css";

const login = () => {
    return(
       <div className="container">
        <form>
            <h1>Acesse o Sistema</h1>

            <div>
            <input type="email" placeholder='E-mail'/>
            <FaUser className="icon" />
            </div>

            <div>
            <input type="password" placeholder='Senha'/>
            <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembra de mim vai, por favor! bora logo 🔪
                </label>
              <a href="#">Esqueceu a senha de novo muié, pelo amor de Deus né 🤪</a>
            </div>

            <button>Entrar</button>

            <div className="signuo-link">
                <p>Tú não tem conta? e vai entrar como? 😡
                    <a href="#">Bora se registrar pelo menos né mona? 👩‍🦰</a>
                </p>
            </div>
            
        </form>
       </div>
    );
}

export default login