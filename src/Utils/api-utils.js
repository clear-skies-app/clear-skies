import request from 'superagent';
// const URL='https://salty-lowlands-47598.herokuapp.com/'
const URL = 'http://localhost:3000';

export async function signupUser(name, email, password) {
	const response = await request
		.post(`${URL}/auth/signup`)
		.send({ name, email, password });

	return response.body;
}

export async function loginUser(email, password) {
	const response = await request
		.post(`${URL}/auth/signin`)
		.send({ email, password });

	return response.body;
}

export async function getApod() {
	const response = await request.get(`${URL}/apod`);

	return response.body;
}

export async function getObservations(token) {
	const observations = await request
		.get(`${URL}/api/observations`)
		.set('Authorization', token);

	return observations;
}

export async function cityToCoords(city, token) {
	const response = await request
		.get(`${URL}/api/lat-lon?city=${city}`)
		.set('Authorization', token);

	return response.body;
}
