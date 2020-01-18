import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import SongForm from './SongForm';

function Songlist() {
	const initialSongList = [
		{ title: 'almost home', id: uuid() },
		{ title: 'memory gospel', id: uuid() },
		{ title: 'this wild darkness', id: uuid() },
	];
	const [songList, setSongList] = useState(initialSongList);
	const [age, setAge] = useState(10);

	// we can use multiple state and effect hooks in a component
	useEffect(() => {
		console.log('useEffect hook called', songList);
	}, [songList]);

	useEffect(() => {
		console.log('useEffect hook called', age);
	}, [age]);

	const incrementAge = () => {
		setAge(age + 1);
	};

	const addNewSong = title => {
		setSongList([...songList, { title, id: uuid() }]);
	};
	return (
		<div className="song-list">
			<ul>
				{songList.map(song => (
					<li key={song.id}>{song.title}</li>
				))}
			</ul>
			{/*<button onClick={addNewSong}>Add a new song</button>*/}
			<SongForm addNewSong={addNewSong} />
			<h1>Age: {age}</h1>
			<button onClick={incrementAge}>Increment Age by 1</button>
		</div>
	);
}

export default Songlist;
