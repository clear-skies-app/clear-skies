import request from 'superagent';
// const URL = 'https://salty-lowlands-47598.herokuapp.com';
const URL = 'http://localhost:3000'

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

	return observations.body;
}

export async function cityToCoords(city, token) {
	const response = await request
		.get(`${URL}/api/lat-lon?city=${city}`)
		.set('Authorization', token);

	return response.body;
}

export async function getLookUp(name, token) {
	const response = await request
		.get(`${URL}/api/lookup?objName=${name}`)
		.set('Authorization', token);

	return response.body;
}
export async function addObservation(token, observationObject) {
	const response = await request
		.post(`${URL}/api/observations`)
		.set('Authorization', token)
		.send(observationObject)

	return response.body;
}

export async function updateObservation(token, name, notes) {
	const response = await request
		.put(`${URL}/api/observations/${name}`)
		.set('Authorization', token)
		.send({notes})

	return response.body;
}

export async function deleteObservation(token, name) {
	const response = await request
		.delete(`${URL}/api/observations/${name}`)
		.set('Authorization', token)

	return response.body;
}

