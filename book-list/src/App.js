import React from 'react';
import './index.css';
import BookContextProvider from './context/BookContext';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';

function App() {
	return (
		<div className="App">
			<BookContextProvider>
				<Navbar />
				<Booklist />
			</BookContextProvider>
		</div>
	);
}

export default App;
