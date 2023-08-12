// routes.js
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import ProtectedRoute from '../components/ProtectedRoutes';

const RoutesApp = ({ addMovie }) => {
	return (
		<Routes>
			{/* Public Route */}
			<Route path='/login' element={<Login />} />

			{/* <Route path='/' element={<Home />} /> */}

			{/* Private Route */}
			<Route
				path='/'
				element={
					<ProtectedRoute>
						<Home addMovie={addMovie} />
					</ProtectedRoute>
				}
			></Route>

			{/* <Route element={<ProtectedRoute />}>
				<Route path='/' element={<Home />} />
			</Route> */}
		</Routes>
	);
};

export default RoutesApp;
