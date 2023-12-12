import React, { useEffect, useState } from 'react';
import SearchBar from './searchBar';
import {getAllTasks} from '../../services/TaskService';
import { TaskResponseInterface } from '../../services/task-response.interface';
import Skeleton from './Skeleton';
import List from './List';

const TaskList = () => {
	const [taskList, setTaskList] = useState<TaskResponseInterface[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [sortArrow, setSortArrow] = useState<boolean>(false);
	const [searchInput, setSearchInput] = useState<string>('');

	useEffect(() => {
		getAllTasks().then((data) => {
			setTaskList(data);
			setLoading(false);
		});
	}, []);

	const sortTasks = () => {
		const sortedTasks = [...taskList].sort((a, b) => {
			if (sortArrow) {
				return Number(a.id) - Number(b.id);
			} else {
				return Number(b.id) - Number(a.id);
			}
		});
		setTaskList(sortedTasks);
		setSortArrow(!sortArrow);
	};

	const searchTasks = taskList.filter((task) => {
	   if (task.title.toLowerCase().includes(searchInput.toLowerCase())) {
		   return task;
	   }
	});

	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="w-1/2 space-y-4">
				<SearchBar
					sortArrow={sortArrow}
					sortTasks={sortTasks}
					searchInput={searchInput}
					setSearchInput={setSearchInput}
				/>
            {loading ? <Skeleton /> : (searchTasks.length > 0 ? <List taskList={searchTasks} /> : <div>Niciun rezultat găsit.</div>)}
			</div>
		</div>
	);
};

export default TaskList;
