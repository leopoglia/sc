import React, { useState } from 'react';
import '../addNew/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Services from '../../../services';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (user === '' || password === '') {
            toast.warning('Preencha todos os campos!');
        } else {

            Services.findAllUsers().then((res) => {
                const users = res;

                const userExists = users.find((u) => {
                    return u.user === user && u.password === password;
                });

                if (userExists) {
                    localStorage.setItem('token', true);
                    navigate('/admin/news');
                } else {
                    toast.error('Usuário ou senha inválidos!');
                }
            }
            );
        }
    }


    return (
        <div className="admin">
            <div className="container">
                <div className="content">

                    <div className="display-block">
                        <h1>Entrar</h1>

                        <span>Usuário</span>
                        <input onChange={(e)=> {setUser(e.target.value)}} type="text" />

                        <span>Senha</span>
                        <input onChange={(e)=> {setPassword(e.target.value)}} type="password" />

                        <button onClick={handleSubmit} className="send">Entrar</button>
                    </div>
                </div>
            </div>
            <ToastContainer position='bottom-right' />
        </div>
    )

}