import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Shared/Login';
import Layout from './pages/Shared/Layout';
import Register from './pages/Shared/Register';
import VerifyMail from './pages/Shared/VerifyMail';
import MainPage from './pages/Shared/MainPage';
import Project from './pages/Panel/Project';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="verifymail/:userId" element={<VerifyMail />} />
				<Route path="" element={<MainPage />}>
					<Route path="" element={<Project />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
