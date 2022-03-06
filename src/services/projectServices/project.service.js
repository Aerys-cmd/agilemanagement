import { BaseHttpService } from '../httpServices/base.httpservice';

export const ProjectService = {};

ProjectService.GetProjects = async () => {
	var response = await BaseHttpService.get(
		'https://localhost:5001/api/Projects/get-users-projects'
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
