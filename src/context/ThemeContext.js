import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
	state = {
		isLightTheme: true,
		light: {
			color: '#555',
			ui: '#ddd',
			bg: '#eee',
		},
		dark: {
			color: '#ddd',
			ui: '#333',
			bg: '#555',
		},
	};

	toggleTheme = () => {
		this.setState({ isLightTheme: !this.state.isLightTheme });
	};
	render() {
		const { children } = this.props;
		return (
			<ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
				{children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContextProvider;
