const USER = 'USER';

export function getNameFromLocalStorage() {
	try {
		const user = JSON.parse(localStorage.getItem(USER));
		const name = user.name;
		return name;
	} catch (error) {
		return '';
	}
}
export function getTokenFromLocalStorage() {
	try {
		const user = JSON.parse(localStorage.getItem(USER));
		const token = user.token;
		return token;
	} catch (error) {
		return '';
	}
}

export function setLocalStorage(user) {
	localStorage.setItem(USER, JSON.stringify(user));
}

export function getObjArray() {
	let nameArray = [];
	nameArray = JSON.parse(localStorage.getItem('OBJOBSRV'));
	return nameArray;
}

export function addObjNameToLSArray(objName) {
	let objArray = [];
	objArray = getObjArray() || [];
	objArray.push(objName);
	localStorage.setItem('OBJOBSRV', JSON.stringify(objArray));
}

export function removeObjNameFromLSArray(objName) {
	let objArray = [];
	objArray = getObjArray() || [];
	const newArray = objArray.filter(name => name.toUpperCase() !== objName.toUpperCase())
	localStorage.setItem('OBJOBSRV', JSON.stringify(newArray));
}

export function setObjArrayLocalStorage(objArray) {
	localStorage.setItem('OBJOBSRV', JSON.stringify(objArray));
}

export function setCoordsInLocalStorage(coords) {
	localStorage.setItem('COORDS', JSON.stringify(coords));
}

export function getCoordsFromLocalStorage() {
	const rawLoc = localStorage.getItem('COORDS');
	try {
		return JSON.parse(rawLoc);
	} catch (e) {
		return '';
	}
}
