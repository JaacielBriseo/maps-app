import { Map } from 'mapbox-gl';
import { useContext, useLayoutEffect, useRef } from 'react';
import { PlacesContext } from '../context';
import { Loading } from './';

export const MapView = () => {
	const { isLoading, userlocation } = useContext(PlacesContext);
	const mapDiv = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!isLoading) {
			const map = new Map({
				container: mapDiv.current!, // container ID
				style: 'mapbox://styles/mapbox/streets-v12', // style URL
				center: userlocation, // starting position [lng, lat]
				zoom: 9, // starting zoom
			});
		}
	}, [isLoading]);

	if (isLoading) {
		return <Loading />;
	}
	return (
		<div
			ref={mapDiv}
			style={{
				height: '100vh',
				width: '100vw',
				position: 'fixed',
				top: '0',
				left: '0',
			}}
		>
			{userlocation?.join(',')}
		</div>
	);
};
