import useForm from '../../hooks/useForm';
import { getUser } from '../../api/usersApi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slices/userSlice';
import { useEffect } from 'react';

const Login = () => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);

	const navigate = useNavigate();

	useEffect(() => {
		if (user.userName) {
			// replace = true para que no se pueda volver a la ruta anterior
			navigate('/', { replace: true });
		}
	}, [user]);

	const { formValues, handleChange } = useForm({
		email: '',
		password: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = formValues;

		const user = await getUser(email, password);
		console.log(user);
		if (user) {
			dispatch(setUser(user));
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='login-email'>Email</label>
				<input
					type='email'
					id='login-email'
					name='email'
					value={formValues.email}
					onChange={handleChange}
					required
				/>

				<label htmlFor='login-password'>Password</label>
				<input
					type='password'
					id='login-password'
					name='password'
					value={formValues.password}
					onChange={handleChange}
					required
				/>

				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Login;
