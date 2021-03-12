// import { render, screen } from '@testing-library/react';
// import App from '../App';
import { cityToCoords } from '../Utils/api-utils.js';
import {
	addObjNameToLSArray,
	getNameFromLocalStorage,
	getObjArray,
	removeObjNameFromLSArray,
	setLocalStorage,
} from '../Utils/local-storage-utils';

test('returns the name, latitude, and longitude of the given city name', async () => {
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTYxNTU0NzEwMX0.nYsGcTSU2XAIQemSdzx33_2JM4MfB2vdM1dUdJSnYTw';

	const expectation = {
		name: 'Bandon, Coos County, Oregon, USA',
		lat: '43.1188464',
		lon: '-124.4080001',
	};
	const actual = await cityToCoords('Bandon, OR', token);

	expect(actual).toEqual(expectation);
});

test('should return a users name from local storage', () => {
	const user = {
		name: 'Juli',
		id: 1,
		token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTYxNTU0NzEwMX0.nYsGcTSU2XAIQemSdzx33_2JM4MfB2vdM1dUdJSnYTw',
	};

	setLocalStorage(user);

	const expectation = 'Juli';

	const actual = getNameFromLocalStorage();

	expect(actual).toEqual(expectation);
});

test('should add the given object to the objArray in LS', () => {
	const nameArray = ['neptune', 'saturn', 'pluto'];

	localStorage.setItem('OBJOBSRV', JSON.stringify(nameArray));

	const newObjName = 'andromeda';

	addObjNameToLSArray(newObjName);

	const updatedArray = getObjArray();

	expect(updatedArray.includes(newObjName)).toEqual(true);
});
