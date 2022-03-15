import { Button, Row, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

function AddProjectBacklogItem() {
	const [tasks, setTasks] = useState([]);
	// const [latestId, setLatestId] = useState();
	const addTaskInput = () => {
		// if (latestId === undefined) setLatestId(1);
		// else {
		// 	setLatestId(latestId + 1);
		// }

		const newId = Math.round(Math.random() * 10000);
		console.log('newId', newId);

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
	return (
		<div>
			<Form.Group className="mb-3">
				<Form.Label>Ürün içerik Başlığı:</Form.Label>
				<Form.Control placeholder="Ürün İçerik Başlığı" />
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Açıklama</Form.Label>
				<Form.Control placeholder="Açıklama" />
			</Form.Group>
			<Button onClick={() => addTaskInput()}>+</Button>
			{tasks.map((x, index) => {
				console.log('Render', x);
				return (
					<>
						<Row key={index}>
							<Form.Control
								value={x.value}
								onChange={(e) => setContent(x.id, e.target.value)}
							/>
							<Button
								key={index}
								className="btn btn-circle"
								onClick={() => deleteTask(x.id)}
							>
								X
							</Button>
						</Row>
					</>
				);
			})}
		</div>
	);
}

export default AddProjectBacklogItem;
