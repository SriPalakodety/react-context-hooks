import React, { createContext, useReducer } from 'react';
import uuid from 'uuid';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

function BookContextProvider(props) {
	const initState = [
		{ title: 'name of the wind', author: 'sample1', id: uuid() },
		{ title: 'the way of the kings', author: 'sample2', id: uuid() },
		{ title: 'the final empire', author: 'sample3', id: uuid() },
		{ title: 'the hero of ages', author: 'sample4', id: uuid() },
	];
	const [books, dispatch] = useReducer(BookReducer, initState);

	return <BookContext.Provider value={{ books, dispatch }}>{props.children}</BookContext.Provider>;
}

export default BookContextProvider;
