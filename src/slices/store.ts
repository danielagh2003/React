import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import { useDispatch } from 'react-redux';
import {ThunkAction, Action } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
