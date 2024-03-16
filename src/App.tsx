import React from 'react';
import './App.css';
import Button from './components/atoms/Button';

function App() {
	return (
		<div className="bg-gray-600 w-screen h-screen p-6">
			<div className="flex gap-x-2">
				<Button>Default</Button>
				<Button variant="rounded">Rounded</Button>
			</div>
		</div>
	);
}

export default App;
