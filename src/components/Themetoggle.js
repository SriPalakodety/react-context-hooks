import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Themetoggle() {
	const { toggleTheme } = useContext(ThemeContext);
	return <button onClick={toggleTheme}>Toggle the theme</button>;
}

export default Themetoggle;
