class Authenticator {
    DB_URL = "";
    EXPIRE_TIME = 1000;
    SECRET = "";
    static uid = 0;
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
    setCookie = (req, res, next) => {
        res.cookie("userID", uid, {secure : true});
        uid++;
        next();
    }
}