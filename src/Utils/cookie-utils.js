import cookie from 'cookie';

export function parseCookies(cookieStr) {
	return cookie.parse(cookieStr);
}
