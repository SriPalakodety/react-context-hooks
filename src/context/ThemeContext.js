import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
	const [isLightTheme, setIsLightTheme] = useState(true);
	const [light] = useState({
		color: '#555',
		ui: '#ddd',
		bg: '#eee',
	});
	const [dark] = useState({
		color: '#ddd',
		ui: '#333',
		bg: '#555',
	});

	const toggleTheme = () => {
		setIsLightTheme(!isLightTheme);
	};
	return (
		<ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme: toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;
