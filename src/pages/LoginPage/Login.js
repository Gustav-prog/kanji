
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import {TryLogin} from '../../services/AuthService';

export default function Login() {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const goToRegisterPage = () => {
        navigate("/register");
    }

    async function handleLogin(event) {
        event.preventDefault();

        await TryLogin(username, password).then(a => {
            console.log(a);
            if (a.status === 200) {
                //setToken(true);
                navigate("/practice");
            } else {
                alert('Incorect username or password')
            }
        })
    }
  
	return (
		<section className="vh-100">
    <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
                <img src="https://images.megapixl.com/588/5887733.jpg"
                     className="img-fluid" alt="Phone image" /> 
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <Form onSubmit={handleLogin}>

                
                    <h2>Login in here</h2>

                    <Form.Group size="lg" controlId="username">
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                     <Form.Label>username</Form.Label>
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Label>password</Form.Label>
                </Form.Group>
                <Button type="submit"  >
                    Login
                </Button>

                    
                       

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>
                </Form>
                    <button onClick={goToRegisterPage} className="btn btn-primary btn-lg btn-block">Register</button>
            </div>
        </div>
    </div>
</section>
	);
}