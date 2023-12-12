import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskBLock from './components/TaskBlock/TaskBlock';
import Favorites from './components/Favorites/favorites';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import CreateTask from './components/CreateTask/CreateTask';
import TaskList from './components/TaskList/TaskList';


function App() {
	return (
		<>
			<ToastContainer />
			<Header/>
			<Routes>
				<Route path={'/'} element={<TaskList/>}/>
				<Route path={'/task-form'} element={<CreateTask/>}/>
				<Route path={'/task/:id'} element={<TaskBLock/>}/>
				<Route path={'/saved'} element={<Favorites/>}/>
			</Routes>
			<Footer/>
		</>	
	);
}

export default App;
