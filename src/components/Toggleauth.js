import React from 'react';
import { AuthContext } from '../context/AuthContext';

function Toggleauth() {
	return (
		<AuthContext.Consumer>
			{context => {
				const { isAuthenticated, toggleAuth } = context;

				return (
					<button onClick={toggleAuth} className="Auth">
						{isAuthenticated ? 'Logout' : 'Please Login'}
					</button>
				);
			}}
		</AuthContext.Consumer>
	);
}

export default Toggleauth;
