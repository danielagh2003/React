import React, { FC } from 'react';
import { CreateTaskFormProps } from '../../services/task-response.interface';

const Form: FC<CreateTaskFormProps> = ({
  title,
  description,
  setDescription,
  setTitle,
  handleCreateTask,
  dueDate,
  setDueDate,
  category,
  setCategory,
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col mt-8 px-6 shadow-xl rounded-xl w-[600px] p-2">
        <div className="flex justify-center text-red-950 text-3xl font-bold">
          <h1>Task Form</h1>
        </div>
        <form onSubmit={handleCreateTask} className="flex flex-col mt-3 w-full">
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-black-500">Denumire Task</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border text-red-900 text-sm rounded-lg block w-full p-2 focus-visible:outline-0"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-gray-900">Descriere</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border text-red-900 text-sm rounded-lg block w-full p-2 focus-visible:outline-0"
              />
            </div>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-gray-900">Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border text-red-900 text-sm rounded-lg block w-full p-2 focus-visible:outline-0"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-gray-900">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border text-red-900 text-sm rounded-lg block w-full p-2 focus-visible:outline-0"
              />
            </div>
          </div>
          <div className="flex justify-center my-2">
            <button
              type="submit"
              className="w-32 h-10 bg-red-500 text-red border border-red-500 rounded-none focus:outline-none"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
