import React, { useState } from 'react';
import '../addNew/style.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('Preencha todos os campos!');
        } else {
            setError('');
        }
    }

    return (
        <div className="admin">
            <div className="container">
                <div className="content">

                    <div className="display-block">
                        <h1>Entrar</h1>

                        <span>Email</span>
                        <input type="text" />

                        <span>Senha</span>
                        <input type="password" />

                        <button className="send">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    )

}