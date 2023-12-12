import React, { useEffect, useState } from 'react';
import { TaskResponseInterface } from '../../services/task-response.interface';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../../services/TaskService';
import moment from 'moment/moment';
import { toast } from 'react-toastify';

const TaskBlock = () => {
  const [task, setTask] = useState<TaskResponseInterface>();
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();
  const [favorites, setFavorites] = useState<TaskResponseInterface[]>(
    JSON.parse(localStorage.getItem('favorites') || '[]')
  );

  useEffect(() => {
    getTaskById(id).then((data) => setTask(data));
  }, [id]);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  const toggleFavorite = () => {
    const updatedFavorites = [...favorites];

    const taskIndex = updatedFavorites.findIndex(
      (favTask: TaskResponseInterface) => favTask.id === task?.id
    );

    if (taskIndex === -1) {
      updatedFavorites.push(task!);
      toast.success('Task-ul a fost adăugat la favorite', { style: { color: 'green' }, position: 'top-left' });
    } else {
      updatedFavorites.splice(taskIndex, 1);
      toast.success('Task-ul a fost înlăturat de la favorite', { style: { color: 'green' }, position: 'top-left' });
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
<div className="w-1/2 mt-20 p-4 flex flex-col justify-center items-center border-none rounded-none shadow-xl">
        <div className="flex flex-col justify-center items-center">
          <p className="text-red-950 font-bold text-3xl first-letter:uppercase">
          <span className="hover:underline cursor-pointer text-lg">{task?.title}</span>
          </p>
        </div>
        {showMore && (
          <div>
            <div className="mt-2 text-red-900 font-bold">Category: {task?.category}</div>
            <div className="mt-12 text-xl text-red-900 font-semibold">
              <p>Descriere:{task?.description}</p>
            </div>
            <div className="flex justify-end items-end w-full mt-8 text-red-700 font-bold">
              <p>Due Date: {moment(task?.dueDate).format('DD MMM YYYY')}</p>
            </div>
          </div>
        )}
        <div className="flex justify-between items-center w-full mt-4">
          <button
            className="text-blue-600 cursor-pointer"
            onClick={handleShowMoreClick}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
          <button
            className={`text-xl ${
              favorites.some((favTask: TaskResponseInterface) => favTask.id === task?.id)
                ? 'text-red-900 cursor-pointer'
                : 'text-violet-500 cursor-pointer'
            }`}
            onClick={toggleFavorite}
          >
            {favorites.some((favTask: TaskResponseInterface) => favTask.id === task?.id)
              ? 'Remove from Favorites'
              : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskBlock;
