import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';

function Bookform(props) {
	const { dispatch } = useContext(BookContext);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: 'ADD_BOOK', book: { title, author } });
		setTitle('');
		setAuthor('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={title}
				placeholder="Enter the title of book"
				onChange={e => setTitle(e.target.value)}
				required
			/>
			<input
				type="text"
				value={author}
				placeholder="Enter the author of book"
				onChange={e => setAuthor(e.target.value)}
				required
			/>
			<input type="submit" />
		</form>
	);
}

export default Bookform;
