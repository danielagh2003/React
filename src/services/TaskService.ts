import http from './http';
import {CreateTaskInput, TaskResponseInterface} from './task-response.interface';

const getAllTasks = async (): Promise<TaskResponseInterface[]> => {
	const response = await http.get<TaskResponseInterface[]>('tasks');
	return response.data;
};

const getTaskById = async (id: string | undefined): Promise<TaskResponseInterface> => {
	const response = await http.get<TaskResponseInterface>(`tasks/${id}`);
	console.log(response.data);
	return response.data;
};


const createTask = async (data: CreateTaskInput): Promise<TaskResponseInterface> => {
	const response = await http.post<TaskResponseInterface>('tasks', data);
	return response.data;
};

export {
	getAllTasks,
	getTaskById,
	createTask
};