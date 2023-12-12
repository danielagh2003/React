import React, { FormEvent, useState } from 'react';
import Form from './Form';
import { createTask } from '../../services/TaskService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const CreateTask = () => {
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [dueDate, setDueDate] = useState<string>('');
	const [category, setCategory] = useState<string>('');
	const navigate = useNavigate();

	const validateTitle = () => title.trim().length >= 3;
  const validateDescription = () => description.trim().length >= 3;
  const validateCategory = () => /^[a-zA-Z]{3,}$/.test(category);

	const handleCreateTask = (e: FormEvent) => {
		e.preventDefault();

		if (!validateTitle() || !validateDescription() || !dueDate.trim() || !validateCategory()) {
			toast.error('Completați corect toate câmpurile', { style: { color: 'red' }, position: 'top-left' });
			return;
		  }
		
		createTask({
			title,
			description,
			dueDate,
			category,
		})
			.then(() => {
				navigate('/');
				toast.success('Task-ul a fost creat cu succes', { style: { color: 'green' }, position: 'top-left' });
			})
			.catch(() => toast.error('Task-ul nu a fost creat', { style: { color: 'red' }, position: 'top-left' }));
	};

	return (
		<Form
			title={title}
			description={description}
			dueDate={dueDate}
			category={category}
			setTitle={setTitle}
			setDescription={setDescription}
			setDueDate={setDueDate}
			setCategory={setCategory}
			handleCreateTask={handleCreateTask}
		/>
	);
};

export default CreateTask;
