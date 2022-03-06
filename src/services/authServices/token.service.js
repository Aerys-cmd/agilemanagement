import jwtDecode from 'jwt-decode';

export const TokenService = {};

TokenService.setToken = (accessToken, refreshToken, rememberMe) => {
	var decodedToken = jwtDecode(accessToken);

	localStorage.setItem('refresh_token', refreshToken);
	localStorage.setItem('access_token', accessToken);
	localStorage.setItem('email', decodedToken.email);
};
TokenService.clearToken = () => {
	localStorage.removeItem('refresh_token');
	localStorage.removeItem('access_token');
	localStorage.removeItem('email');
};
