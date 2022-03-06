import React, { useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/authServices/auth.service';
import './Login.css';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	function validateForm() {
		return email.length > 0 && password.length > 0;
	}
	const navigate = useNavigate();
	function handleSubmit(event) {
		event.preventDefault();
		AuthService.login(email, password, (response, error) => {
			if (response.url != null) navigate(response.url);

			alert(error);
		});
	}
	return (
		<div className="Login">
			<Form onSubmit={handleSubmit}>
				<h1>Giriş yapın</h1>
				<Form.Group size="lg" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						autoFocus
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group size="lg" controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<br />
				<Button
					block="true"
					size="lg"
					type="submit"
					disabled={!validateForm() && 'disabled'}
				>
					Login
				</Button>
			</Form>
		</div>
	);
}

export default Login;
