import jwtDecode from 'jwt-decode';
import { BaseHttpService } from '../httpServices/base.httpservice';
import { TokenService } from './token.service';

export const AuthService = {};

AuthService.isAuthenticated = () => {
	if (localStorage.getItem('access_token') == undefined) return false;

	return true;
};

AuthService.Username = () => {
	return localStorage.getItem('email') != undefined
		? localStorage.getItem('email')
		: undefined;
};

AuthService.login = async (email, password, callback) => {
	const param = {
		email: email,
		password: password,
	};
	try {
		let response = await BaseHttpService.post(
			'https://localhost:5001/api/Auth/get-token',
			param
		);
		if (response.status === 200) {
			TokenService.setToken(
				response.data.accessToken,
				response.data.refreshToken
			);
			callback({ url: '/' }, null);
		} else {
			callback(null, { message: 'Kullanıcı adı veya şifre yanlış' });
		}
	} catch (error) {
		callback(null, { message: 'Sunucuda bir hata oluştu.' });
		console.log('Login Error', error);
	}
};
AuthService.register = async (
	email,
	firstName,
	lastName,
	password,
	callback
) => {
	const param = {
		email: email,
		password: password,
		firstName: firstName,
		lastName: lastName,
	};

	try {
		let response = await BaseHttpService.post(
			'https://localhost:5001/api/Auth/userregister',
			param
		);
		if (response.status === 200) {
			TokenService.setToken(
				response.data.accessToken,
				response.data.refreshToken
			);
			callback({ url: '/login' }, null);
		} else {
			callback(null, { message: response.data });
		}
	} catch (error) {
		callback(null, { message: 'Sunucuda bir hata oluştu.' });
		console.log('Register Error', error);
	}
};
AuthService.verifyMail = async (userId, callback) => {
	const params = {
		userId: userId,
	};
	try {
		const response = await BaseHttpService.post(
			'https://localhost:5001/api/verify/verify-email',
			params
		);

		callback('login');
	} catch (error) {
		console.log(error);
		callback('error');
	}
};

AuthService.logout = (callback) => {
	TokenService.clearToken();
	callback({ url: '/login' });
};
