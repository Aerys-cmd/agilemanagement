import Project from '../../pages/Panel/Project';
import { BaseHttpService } from '../httpServices/base.httpservice';

export const ProjectService = {};

ProjectService.GetProjects = async () => {
	var response = await BaseHttpService.get(
		'https://localhost:5001/api/Projects/get-users-projects'
	);
	return response;
};
ProjectService.SendContributorAccess = async (projectId, contributorMail) => {
	const params = {
		projectId: projectId,
		contributorMail: contributorMail,
	};

	var response = await BaseHttpService.post(
		'https://localhost:5001/api/projects/send-project-access',
		params
	);

	return response;
};

ProjectService.AcceptProjectAccess = async (projectId, contributorMail) => {
	const params = {
		projectId: projectId,
		contributorEmail: contributorMail,
	};

	var response = await BaseHttpService.post(
		'https://localhost:5001/api/Verify/accept-project-access',
		params
	);
	return response;
};

ProjectService.AddProject = async (projectName, projectDescription) => {
	const params = {
		name: projectName,
		description: projectDescription,
	};
	var response = await BaseHttpService.post(
		'https://localhost:5001/api/Projects/add-project',
		params
	);

	return response;
};
