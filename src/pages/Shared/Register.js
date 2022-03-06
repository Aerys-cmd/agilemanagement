import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/authServices/auth.service';
import './Register.css';

function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	function validateForm() {
		if (
			email.length > 0 &&
			password.length > 0 &&
			password == confirmPassword &&
			firstName.length > 0 &&
			lastName.length > 0
		)
			return true;

		return false;
	}
	const navigate = useNavigate();
	console.log(validateForm());
	function handleSubmit(event) {
		event.preventDefault();
		AuthService.register(
			email,
			firstName,
			lastName,
			password,
			(response, error) => {
				if (response.url != null) navigate(response.url);
				else alert(error);
			}
		);
	}
	return (
		<div className="Register">
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
				<Form.Group size="lg" controlId="firstname">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						autoFocus
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group size="lg" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						autoFocus
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
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
				<Form.Group size="lg" controlId="passwordconfirm">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
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

export default Register;
