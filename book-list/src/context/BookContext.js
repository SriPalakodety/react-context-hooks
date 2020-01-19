import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const BookContext = createContext();

function BookContextProvider(props) {
	const initState = [
		{ title: 'name of the wind', author: 'sample1', id: uuid() },
		{ title: 'the way of the kings', author: 'sample2', id: uuid() },
		{ title: 'the final empire', author: 'sample3', id: uuid() },
		{ title: 'the hero of ages', author: 'sample4', id: uuid() },
	];
	const [books, setBooks] = useState(initState);

	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: uuid() }]);
	};

	const removeBook = id => {
		setBooks(books.filter(book => book.id !== id));
	};
	return (
		<BookContext.Provider value={{ books, addBook: addBook, removeBook: removeBook }}>
			{props.children}
		</BookContext.Provider>
	);
}

export default BookContextProvider;
