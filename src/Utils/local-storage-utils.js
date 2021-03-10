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

export function setObjArrayLocalStorage(objArray) {
	localStorage.setItem('OBJOBSRV', JSON.stringify(objArray));
}
