const USER = 'USER';

export function getNameFromLocalStorage (){
    const user = JSON.parse(localStorage.getItem(USER));
    const name = user.name;
    try {
        return name
    } catch (error) {
        return '';
    }
}
export function getTokenFromLocalStorage (){
    const user = JSON.parse(localStorage.getItem(USER));
    const token = user.token;
    try {
        return token
    } catch (error) {
        return '';
    }
}

export function setLocalStorage(user){
    localStorage.setItem(USER, JSON.stringify(user))
}
