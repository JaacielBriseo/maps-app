import { useContext } from 'react';
import { PlacesContext } from '../context';
import { LoadingPlaces } from '.';
export const SearchResults = () => {
	const { isLoadingPlaces, places } = useContext(PlacesContext);
	if (isLoadingPlaces) {
		return <LoadingPlaces />;
	}
	if (places.length === 0) {
		return <></>;
	}
	return (
		<ul className='list-group mt-3'>
			{places.map((place) => (
				<li key={place.id} className='list-group-item list-group-item-action'>
					<h6>{place.text_es}</h6>
					<p style={{ fontSize: '12px' }} className='text-muted'>
						{place.place_name}
					</p>
					<button className='btn btn-btn-outline-primary btn-sm'>Direcciones</button>
				</li>
			))}
		</ul>
	);
};
