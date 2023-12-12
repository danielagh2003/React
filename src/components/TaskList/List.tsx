import React, { FC } from 'react';
import moment from 'moment/moment';
import { TaskResponseInterface } from '../../services/task-response.interface';
import { useNavigate } from 'react-router-dom';

interface ListProps {
  taskList: TaskResponseInterface[];
}

const List: FC<ListProps> = ({ taskList }) => {
  const navigate = useNavigate();

  return (
    <div className="w-2/3 ml-auto mr-4">
      {taskList.length !== 0 ? (
        taskList.map((task, index) => (
         <div key={task.id} className="flex justify-between w-full">
            <div onClick={() => navigate(`task/${task.id}`)} className="text-green-500 text-1xl">
              <h1>
                <span className="hover:underline cursor-pointer">{`${index + 1}. ${task.title}`}</span>
              </h1>
            </div>
            <div className="flex flex-col items-end space-y-1">
              {

              }
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center text-gray-500 text-3xl">Nu există task-uri de afișat</div>
      )}
    </div>
  );
};

export default List;
