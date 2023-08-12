import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// children representa a los componentes hijos de este componente
const ProtectedRoute = ({ children }) => {
	const user = useSelector((state) => state.user);

	// si el usuario no esta autenticado redirecciona a la ruta de login
	if (!user.userName) {
		return <Navigate to='/login' />;
	}

	return children;
};

export default ProtectedRoute;
