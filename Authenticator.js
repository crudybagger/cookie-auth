class Authenticator {
    DB_URL = "";
    EXPIRE_TIME = 1000;
    SECRET = "";
    constructor(url, time) {
        this.DB_URL = url;
        this.EXPIRE_TIME = time;
    }
    async verifyCookie(req) {
        // Get token from req
        if(!req.signedCookies.cookie-auth-id) {
            return false;
        }
        return req.signedCookies.cookie-auth-id;
    }
    
}