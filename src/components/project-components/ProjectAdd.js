import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { ProjectService } from '../../services/projectServices/project.service';
import ProjectSendAccess from './ProjectSendAccess';

function ProjectAdd() {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const projectName = e.target.projectName.value;
		const projectDescription = e.target.projectDescription.value;

		var response = await ProjectService.AddProject(
			projectName,
			projectDescription
		);
	};

	return (
		<>
			<Form method="post" name="projectAddForm" onSubmit={handleSubmit}>
				<Form.Label>Proje İsmi :</Form.Label>
				<Form.Control type="text" name="projectName" id="projectName" />
				<Form.Label>Proje Açıklaması :</Form.Label>
				<Form.Control
					as="textarea"
					placeholder="Açıklama"
					name="projectDescription"
					style={{ height: '100px' }}
				/>
				<Button variant="primary" size="lg" type="submit">
					Gönder
				</Button>
			</Form>
		</>
	);
}

export default ProjectAdd;
