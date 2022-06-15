import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Register() { 

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    function goBackToLoginPage() {
        navigate("/");
    }

    function registerUser() {
        fetch("http://localhost:8080/user/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        }).then(res => {
            console.log(res);
            if(res.status === 200) {
            goBackToLoginPage();
            }
        }).catch(e => console.log(e))
    }

    function handleSubmit(event) {
        event.preventDefault();
        registerUser();
    }

    return (
        <section className="vh-100">
    <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
                <img src="https://i.pinimg.com/originals/4b/39/a9/4b39a94252cddcc7d20326c140278c4e.png"
                     className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
             <Form onSubmit={handleSubmit}>

                    <h2>Register as a new user</h2>

                    <Form.Group size="lg" controlId="username" className="form-outline mb-4">
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        onChange={(u) => setUsername(u.target.value)}
                        required
                    /> 
                    <Form.Label>username</Form.Label>
                    </Form.Group>

                    <Form.Group size="lg" controlId="email">
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(u) => setEmail(u.target.value)}
                        required
                    />
                    <Form.Label>email</Form.Label>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(u) => setPassword(u.target.value)}
                        required
                    />
                    <Form.Label>password</Form.Label>
                </Form.Group>
                <Button block size="lg" type="submit" >
                    Register
                </Button>
                 </Form>

                 <Button onClick={goBackToLoginPage} block size="lg" type="submit" className="btn btn-secondary">
                    Go back
                </Button>
            </div>
        </div>
    </div>
</section>
    );
}