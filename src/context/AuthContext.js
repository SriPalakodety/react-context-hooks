import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

function AuthContextProvider(props) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const toggleAuth = () => {
		setIsAuthenticated(!isAuthenticated);
	};
	return (
		<AuthContext.Provider value={{ isAuthenticated, toggleAuth: toggleAuth }}>
			{props.children}
		</AuthContext.Provider>
	);
}

export default AuthContextProvider;
