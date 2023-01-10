const jwt = require("jsonwebtoken");

exports.createToken = (email) => {

    const token = jwt.sign({email}, "msg", { expiresIn: '2d' });

    return token;
}