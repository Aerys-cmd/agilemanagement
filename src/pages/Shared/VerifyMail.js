import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthService } from '../../services/authServices/auth.service';

function VerifyMail() {
	const { userId } = useParams();
	const navigator = useNavigate();
	useEffect(() => {
		AuthService.verifyMail(userId, (url) => {
			navigator('/' + url);
		});
	}, []);
	return <div>VerifyMail</div>;
}

export default VerifyMail;
