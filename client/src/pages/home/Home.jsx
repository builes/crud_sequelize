import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import Movies from '../../components/Movies';
import { addMovie } from '../../redux/slices/moviesSlice';

const MyForm = ({ addMovie }) => {
	const { formValues, handleChange } = useForm({
		title: '',
		description: '',
	});

	const { title, description } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (title.trim() === '' || description.trim() === '') {
			return alert('All fields are required');
		}

		console.log(title, description);
		addMovie({ title, description });

		// dispatch(addMovie({ title, description }));
	};

	return (
		<div>
			<h1>Movie Form</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>Movie</label>
				<input
					type='text'
					id='title'
					name='title'
					value={title}
					onChange={handleChange}
					required
				/>

				<label htmlFor='description'>Description</label>
				<textarea
					id='description'
					name='description'
					value={description}
					onChange={handleChange}
					required
				/>

				<button type='submit'>Submit</button>
			</form>

			<Movies addMovie={addMovie} />
		</div>
	);
};

export default MyForm;
