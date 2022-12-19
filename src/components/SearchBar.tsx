import { ChangeEvent, useRef } from 'react';
export const SearchBar = () => {
	const debounceRef = useRef<NodeJS.Timeout>();

	const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}
		debounceRef.current = setTimeout(() => {
			//todo : buscar o ejecutar consulta
			console.log('debounced value:', event.target.value);
		}, 350);
	};

	return (
		<div className='search-container'>
			<input className='form-control' placeholder='Buscar lugar...' type='text' onChange={onQueryChanged} />
		</div>
	);
};
