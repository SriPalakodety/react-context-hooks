import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

function Booklist() {
	// This way(static) is not suggested as it can't be used
	// in functional components
	// static contextType = ThemeContext;

	// One more advantage of this approach is we can use multiple contexts
	// in one component
	return (
		<AuthContext.Consumer>
			{authContext => {
				return (
					<ThemeContext.Consumer>
						{themeContext => {
							const { isLightTheme, light, dark } = themeContext;
							const theme = isLightTheme ? light : dark;
							const { isAuthenticated } = authContext;
							const content = isAuthenticated ? (
								<div className="book-list" style={{ backgroundColor: theme.bg, color: theme.color }}>
									<ul>
										<li style={{ backgroundColor: theme.ui }}>the way of kings</li>
										<li style={{ backgroundColor: theme.ui }}>the name of the wind</li>
										<li style={{ backgroundColor: theme.ui }}>the final empire</li>
									</ul>
								</div>
							) : (
								''
							);
							return content;
						}}
					</ThemeContext.Consumer>
				);
			}}
		</AuthContext.Consumer>
	);
}

export default Booklist;
