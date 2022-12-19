import axios from 'axios';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params: {
		limit: 5,
		language: 'es',
		access_token: 'pk.eyJ1IjoiamFhY2llbGIiLCJhIjoiY2xiajN1MXpoMTV2aTNucHIwZXRmY2tsdSJ9.C2-OLQLA45m2KWfV7LHYPQ',
	},
});
export default searchApi;
