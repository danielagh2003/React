import React, { FormEvent } from 'react';

export interface TaskResponseInterface {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  dueDate: Date;
  category: string; 
}

export interface CreateTaskFormProps {
  title: string;
  description: string;
  dueDate: string;
  category: string; 
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setDueDate: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>; 
  handleCreateTask(e: FormEvent): void;
}

export interface CreateTaskInput {
  title: string;
  description: string;
  dueDate: string;
  category: string; 
}
