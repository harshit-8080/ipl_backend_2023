const jwt = require("jsonwebtoken");
// const {JWT_SECRET} = require("../configs/sever.config");

exports.createToken = (email) => {

    const token = jwt.sign({email}, "msg", { expiresIn: '2d' });

    return token;
}

exports.verifyToken = (token) => {

    const decode = jwt.verify(token,"msg");

    return decode;
}