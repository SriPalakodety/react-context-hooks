import React, { useState } from 'react';

function SongForm({ addNewSong }) {
	const [title, setTitle] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		addNewSong(title);
		setTitle('');
	};
	return (
		<form onSubmit={e => handleSubmit(e)}>
			<label>Song Name:</label>
			<input
				type="text"
				required
				value={title}
				placeholder="add a new song title"
				onChange={e => {
					setTitle(e.target.value);
				}}
			/>
			<input type="submit" />
		</form>
	);
}

export default SongForm;
