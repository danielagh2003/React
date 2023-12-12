import React, { useState } from 'react';
import { TaskResponseInterface } from '../../services/task-response.interface';
import moment from 'moment';

const Favorites = () => {
  const favorites: TaskResponseInterface[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  const [showMore, setShowMore] = useState<number | null>(null); 

  const handleShowMoreClick = (index: number) => {
    setShowMore((prevIndex) => (prevIndex === index ? null : index)); 
  };

  return (
    <div className="flex flex-col items-start w-full mt-28 ml-4">
      <h1 className="text-1xl underline my-10 text-red-900">Task-uri favorite</h1>
      <div className="w-1/2 space-y-4">
        {favorites.length !== 0 ? (
        favorites.map((task, index) => (
			<div
			  key={task.id}
			  className="flex flex-col w-full"			>
              <div className="text-green-500 text-1xl mb-1">
                <h1>
                  <span
                    className="hover:underline cursor-pointer"
                    onClick={() => handleShowMoreClick(index)}
                  >
                    {`${index + 1}. ${task.title}`}
                  </span>
                </h1>
              </div>
              {showMore === index && (
                <>
                  <div className="text-green-500 text-sm mb-1">
                    <span>Categorie: {task.category}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-green-500 text-sm">
                      <span>{moment(task.dueDate).format('DD MMM YYYY')}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <div className="flex justify-center text-red-900 text-4xl">Nu exista niciun task de afișat</div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
