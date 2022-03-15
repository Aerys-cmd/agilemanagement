import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ProjectService } from '../../services/projectServices/project.service';

function ProjectSendAccess() {
	const [projects, setProjects] = useState();
	useEffect(async () => {
		var response = await ProjectService.GetProjects();

		const data = response.data.projects;
		setProjects(data);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const projectId = e.target.project.value;
		const contributorMail = e.target.contributorMail.value;

		var response = await ProjectService.SendContributorAccess(
			projectId,
			contributorMail
		);
		console.log(response);
	};
	return (
		<>
			<Form method="post" onSubmit={handleSubmit}>
				<Form.Label>Proje Seç :</Form.Label>
				<Form.Select name="project">
					{projects !== undefined &&
						projects.map((x, index) => {
							return (
								<option key={index} value={x.id}>
									{x.name}
								</option>
							);
						})}
				</Form.Select>
				<Form.Label>Katılımcı mail :</Form.Label>
				<Form.Control
					name="contributorMail"
					placeholder="Açıklama"
					style={{ height: '100px' }}
				/>
				<Button variant="primary" size="lg" type="submit">
					Gönder
				</Button>
			</Form>
		</>
	);
}

export default ProjectSendAccess;
