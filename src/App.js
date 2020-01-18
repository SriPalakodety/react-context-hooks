import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './context/ThemeContext';
import Themetoggle from './components/Themetoggle';
import AuthContextProvider from './context/AuthContext';
import Toggleauth from './components/Toggleauth';

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<AuthContextProvider>
					<Toggleauth />
					<Navbar />
					<Booklist />
					<Themetoggle />
				</AuthContextProvider>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
