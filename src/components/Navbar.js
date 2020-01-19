import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
	const { isLightTheme, dark, light } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<nav style={{ backgroundColor: theme.bg, color: theme.color }}>
			<h1>Context App</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
}

export default Navbar;
