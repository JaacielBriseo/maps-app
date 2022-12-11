import { createContext } from 'react';

export interface PlacesContextProps {
	isLoading: boolean;
	userlocation?: [number, number];
}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);
