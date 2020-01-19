import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { BookContext } from '../context/BookContext';

function Booklist() {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	const { isAuthenticated } = useContext(AuthContext);
	const { books } = useContext(BookContext);

	const submitFormData = e => {
		e.preventDefault();
		console.log({ isAuthenticated, isLightTheme, books });
	};

	return isAuthenticated ? (
		<div className="book-list" style={{ backgroundColor: theme.bg, color: theme.color }}>
			<ul>
				{books.map(book => (
					<li style={{ backgroundColor: theme.ui }} key={book.id}>
						{book.title}
					</li>
				))}
			</ul>
			<form onSubmit={e => submitFormData(e)}>
				<button>Submit the form</button>
			</form>
		</div>
	) : null;
}

export default Booklist;
