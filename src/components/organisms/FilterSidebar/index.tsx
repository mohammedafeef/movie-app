import Slider from '../../atoms/Slider';
import Badge from '../../atoms/Badge';
import DatePicker from '../../atoms/DatePicker';
import React from 'react';
import Select from '../../atoms/Select';
import { FilterSidebarProps } from './types';
import { useController } from './useController';
import Button from 'components/atoms/Button';

const FilterSidebar: React.FC<FilterSidebarProps> = (props) => {
	const { values, actions } = useController(props);
	if (!props.isOpen) {
		return null;
	}
	return (
		<div className="fixed inset-0 flex justify-end z-[1]">
			<div
				className="fixed inset-0 z-[1] bg-black/50"
				onClick={props.onClose}
			/>
			<div className="bg-white w-[90%] max-w-[300px] h-full p-4 z-[2] flex flex-col">
				<h3 className="text-lg font-bold m-0 mb-4">Sort & Filter</h3>
				<div className="flex flex-col flex-1 overflow-scroll">
					<div className="flex flex-col gap-y-2 mb-3">
						<label className="text-sm font-semibold text-gray-300">
							Release Date
						</label>
						<div className="flex gap-x-2">
							<span className="text-sm font-semibold text-black">
								Search All Releases
							</span>
						</div>
						<div className="flex items-center">
							<label className="text-sm font-semibold text-gray-300 w-[70px]">
								From
							</label>
							<DatePicker
								value={values.fromDate}
								onChange={actions.handleFromDateChange}
							/>
						</div>
						<div className="flex items-center">
							<label className="text-sm font-semibold text-gray-300 w-[70px]">
								To
							</label>
							<DatePicker
								value={values.toDate}
								onChange={actions.handleToDateChange}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-y-2 mb-3">
						<label className="text-sm font-semibold text-gray-300">
							Genres
						</label>
						<div className="flex gap-2 flex-wrap">
							{values.genres.map((genre) => (
								<Badge
									key={genre.id}
									onSelect={actions.handleGenreSelection(genre.id)}
									selected={actions.isGenreSelected(genre.id)}
								>
									{genre.name}
								</Badge>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-y-2 mb-3">
						<label className="text-sm font-semibold text-gray-300">
							Language
						</label>
						<div className="flex w-full">
							<Select
								options={values.languageOptions}
								value={values.language}
								onChange={actions.handleLanguageChange}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-y-2 mb-3">
						<label className="text-sm font-semibold text-gray-300">
							User Rating
						</label>
						<div className="flex w-full">
							<Slider
								min="0"
								max="5"
								step={'1'}
								className="w-full"
								value={values.rating}
								onChange={actions.handleRatingChange}
							/>
						</div>
					</div>
				</div>
				<div className="flex gap-x-3 pt-4">
					<Button variant="rounded" onClick={actions.handleSearch}>
						Submit
					</Button>
					<Button variant="rounded" onClick={actions.handleResetFilter}>
						Reset
					</Button>
				</div>
			</div>
		</div>
	);
};

export default FilterSidebar;
