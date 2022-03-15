import { Button, Col, Row, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { ProjectService } from '../../services/projectServices/project.service';

function AddProjectBacklogItem() {
	const [tasks, setTasks] = useState([]);
	// const [latestId, setLatestId] = useState();
	const [projects, setProjects] = useState([]);
	const addTaskInput = () => {
		const newId = Math.round(Math.random() * 10000);
		const newTask = {
			id: newId,
			value: '',
		};
		let newTasks = [...tasks, newTask];

		setTasks(newTasks);
	};

	const deleteTask = (id) => {
		var filteredTasks = tasks.filter((x) => x.id !== id);
		setTasks(filteredTasks);
	};

	const setContent = (id, e) => {
		const task = tasks.find((x) => x.id == id);
		task.value = e;
		setTasks([...tasks]);
	};

	useEffect(async () => {
		var response = await ProjectService.GetProjects();
		setProjects(response.data.projects);
	}, []);

	return (
		<div>
			<Form>
				<Form.Group>
					<Form.Label className="mb-3">Proje Seçiniz.</Form.Label>
					<Form.Select>
						{projects &&
							projects.map((x, index) => {
								return (
									<option key={index} value={x.id}>
										{x.name}
									</option>
								);
							})}
					</Form.Select>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Ürün içerik Başlığı:</Form.Label>
					<Form.Control placeholder="Ürün İçerik Başlığı" />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Açıklama</Form.Label>
					<Form.Control placeholder="Açıklama" />
				</Form.Group>
				<Form.Group className="mb-3" style={{ float: 'right' }}>
					<Button className="mb-3" onClick={() => addTaskInput()}>
						+
					</Button>
				</Form.Group>
				<Row>
					<Form.Group className="mb-3">
						{tasks.map((x, index) => {
							return (
								<>
									<Row key={index} className="mb-3">
										<Col>
											<Form.Control
												value={x.value}
												onChange={(e) => setContent(x.id, e.target.value)}
											/>
										</Col>

										<Col>
											<Button
												key={index}
												className="btn btn-circle"
												onClick={() => deleteTask(x.id)}
											>
												X
											</Button>
										</Col>
									</Row>
								</>
							);
						})}
					</Form.Group>
				</Row>

				<Form.Group>
					<Button className="btn btn-primary" type="submit">
						Gönder
					</Button>
				</Form.Group>
			</Form>
		</div>
	);
}

export default AddProjectBacklogItem;
