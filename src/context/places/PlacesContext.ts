import { createContext } from 'react';
import { Feature } from '../../interfaces/places';

export interface PlacesContextProps {
	isLoadingPlaces: boolean;
	places: Feature[];
	isLoading: boolean;
	userLocation?: [number, number];
	searchPlacesByTerm: (query: string) => Promise<Feature[]>;
}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);
