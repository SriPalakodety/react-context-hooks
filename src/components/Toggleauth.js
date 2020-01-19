import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Toggleauth() {
	const { isAuthenticated, toggleAuth } = useContext(AuthContext);
	return (
		<button onClick={toggleAuth} className="Auth">
			{isAuthenticated ? 'Logout' : 'Please Login to see book list'}
		</button>
	);
}

export default Toggleauth;
