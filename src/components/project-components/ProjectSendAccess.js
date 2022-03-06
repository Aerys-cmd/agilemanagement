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

	console.log(projects);

	const handleSubmit = () => {};
	return (
		<>
			<Form method="post" onSubmit={handleSubmit}>
				<Form.Label>Proje İsmi :</Form.Label>
				<Form.Select>
					{projects !== undefined &&
						projects.map((x, index) => {
							return (
								<option key={index} value={x.id}>
									{x.name}
								</option>
							);
						})}
				</Form.Select>
				<Form.Label>Proje Açıklaması :</Form.Label>
				<Form.Control
					as="textarea"
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
