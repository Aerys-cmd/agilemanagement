import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectService } from '../../services/projectServices/project.service';

function AcceptProjectAccess() {
	const { projectId, contributorMail } = useParams();
	const navigator = useNavigate();
	useEffect(async () => {
		var response = await ProjectService.AcceptProjectAccess(
			projectId,
			contributorMail
		);
		console.log(projectId, 'ProjectId:13');
	}, []);

	return <div>AcceptProjectAccess</div>;
}

export default AcceptProjectAccess;
