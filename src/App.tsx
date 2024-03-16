import React from 'react';
import './App.css';
import Button from './components/atoms/Button';
import Select from './components/atoms/Select';
import DatePicker from './components/atoms/DatePicker';
import Slider from './components/atoms/Slider';
import Badge from './components/atoms/Badge';
import BottomNavbar from './components/organisms/BottomNavBar';
import PageHeader from './components/organisms/PageHeader';
import BasicMovieCard from './components/atoms/BasicMovieCard';
import DetailedMovieCard from './components/molecules/DetailedMovieCard';
import FilterSidebar from './components/organisms/FilterSidebar';

function App() {
	return (
		<div className="bg-gray-600 w-screen p-6 flex flex-col gap-y-2 focus-visible:outline-none overflow-x-hidden">
			<FilterSidebar/>
			<div className="flex gap-x-2">
				<Button>Default</Button>
				<Button variant="rounded">Rounded</Button>
			</div>
			<Select
				options={[
					{ value: '1', label: 'One' },
					{ value: '2', label: 'Two' },
				]}
			/>
			<DatePicker />
			<Slider min="0" max="5" step={'1'} />
			<div className="flex gap-x-2">
				<Badge selected>Selected</Badge>
				<Badge>Default</Badge>
			</div>
			<div className="h-[100px]">
				<BottomNavbar />
			</div>
			<div className="h-[100px]">
				<PageHeader />
			</div>
			<BasicMovieCard
				title="The Godfather"
				poster_path="https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
				id={1}
			/>
			<DetailedMovieCard
				title="The Godfather"
				poster_path="https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
				id={1}
			/>
		</div>
	);
}

export default App;
