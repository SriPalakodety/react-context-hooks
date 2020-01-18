import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
	// This way(static) is not suggested as it can't be used
	// in functional components
	// static contextType = ThemeContext;
	render() {
		return (
			<ThemeContext.Consumer>
				{context => {
					const { isLightTheme, dark, light } = context;
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
				}}
			</ThemeContext.Consumer>
		);
	}
}

export default Navbar;
