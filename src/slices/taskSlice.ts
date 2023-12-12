import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '../services/http';
import { TaskResponseInterface } from '../services/task-response.interface';
import { toast } from 'react-toastify';
import axios from 'axios';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  category: string;
}

interface TaskState {
  tasks: Task[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

export interface RootState {
  tasks: TaskState;
}

const initialState: TaskState = {
  tasks: [],
  loading: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk<TaskResponseInterface[], void>('tasks/fetchTasks', async () => {
  try {
    const response = await axios.get<TaskResponseInterface[]>('https://65776e86197926adf62e489f.mockapi.io/api/v1/');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      toast.success('Task added successfully', { position: 'top-left' });
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = 'pending';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action: PayloadAction<Task[]>) => {
          state.loading = 'succeeded';
          state.tasks = action.payload; 
          toast.success('Tasks fetched successfully', { position: 'top-left' });
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action: PayloadAction<{ message: string }>) => {
          state.loading = 'failed';
          state.error = action.payload.message || 'Failed to fetch tasks'; 
          toast.error(state.error, { position: 'top-left' });
        }
      );
  },
});
export const { addTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectLoading = (state: RootState) => state.tasks.loading;


export default taskSlice.reducer;
