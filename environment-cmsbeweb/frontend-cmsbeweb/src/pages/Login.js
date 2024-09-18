import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './Login.css';
import ButtonLogin from '../shared/generic/buttonLogin';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        if (username !== '' && password !== '') {
            localStorage.setItem('username', username);
        }
    }, [username, password]);

    return (
        <div>
            <div className="container">
                <div className="form-container">
                    <Form>
                        <p className='login'>Connexion</p>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label className='Text'>Identifiant</Form.Label>
                            <Form.Control type="text" value={username} onChange={handleUsernameChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='Text'>Mot de passe</Form.Label>
                            <Form.Control type="password" value={password} onChange={handlePasswordChange} />
                        </Form.Group>

                        <div className="d-flex justify-content-end">
                            <ButtonLogin className="ButtonText" username={username} password={password} />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
