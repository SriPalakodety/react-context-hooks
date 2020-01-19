import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const BookContext = createContext();

function BookContextProvider(props) {
	const initialState = [
		{ title: 'name of the wind', id: uuid() },
		{ title: 'the way of the kings', id: uuid() },
		{ title: 'the final empire', id: uuid() },
		{ title: 'the hero of ages', id: uuid() },
	];

	const [books, setBooks] = useState(initialState);
	return <BookContext.Provider value={{ books }}>{props.children}</BookContext.Provider>;
}

export default BookContextProvider;
