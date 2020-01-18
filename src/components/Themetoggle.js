import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Themetoggle() {
	return (
		<ThemeContext.Consumer>
			{context => {
				const { toggleTheme } = context;
				return (
					<div>
						<button onClick={toggleTheme}>Toggle the theme</button>
					</div>
				);
			}}
		</ThemeContext.Consumer>
	);
}

export default Themetoggle;
