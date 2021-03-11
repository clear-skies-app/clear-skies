import request from 'superagent';
const URL = 'https://salty-lowlands-47598.herokuapp.com';
// const URL = 'http://localhost:3000';

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
	if(response.body.category === 'Constellation') {
		const wikiResponse = await request
		.get(`http://en.wikipedia.org/w/api.php?action=query&titles=${response.body.name} (constellation)&prop=pageimages&format=json&pithumbsize=500`)
		response.body.image = wikiResponse.body.query.pages['26932'].thumbnail.source
	}
	else {
		const wikiResponse = await request
		.get(`http://en.wikipedia.org/w/api.php?action=query&titles=${response.body.name}&prop=pageimages&format=json&pithumbsize=500`)
		response.body.image = wikiResponse.body.query.pages['26932'].thumbnail.source
	}
	return response.body;
}
export async function addObservation(token, observationObject) {
	const response = await request
		.post(`${URL}/api/observations`)
		.set('Authorization', token)
		.send(observationObject)

	return response.body;
}

