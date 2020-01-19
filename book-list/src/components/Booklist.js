import React, { useContext } from 'react';
import BookContextProvider, { BookContext } from '../context/BookContext';
import Bookdetails from './Bookdetails';
import Bookform from './Bookform';

function Booklist(props) {
	const { books } = useContext(BookContext);
	return books.length ? (
		<div className="book-list">
			<ul>
				{books.map(book => (
					<Bookdetails key={book.id} book={book} />
				))}
			</ul>
			<Bookform />
		</div>
	) : (
		<div style={{ textAlign: 'center', margin: '10px' }}>
			<div>No books to go through</div>
			<Bookform />
		</div>
	);
}

export default Booklist;
