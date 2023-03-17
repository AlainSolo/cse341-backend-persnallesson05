const checkplogin = (req, res, next) => {
 if (req.oidc.isAuthenticcated()) {
    return res.status(401).send({
        error: "not autorized to change data without login.",
        login: "http:cse341-backend-L07.onrender.com/login"
    })
 }
next();
};


module.exports = (checkplogin);