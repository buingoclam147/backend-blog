const utils = require('../shared/utils');
const { User } = require('../models');
const jwt = require('jsonwebtoken');

function generateJWT(playload) {
    return jwt.sign(playload, `${process.env.TOKEN_SECRET}`, { expiresIn: '120s' });
}

const login = (req, res) => {
    account = req.body;
    console.log(account);
    User.find(account).then(x => {
        data = {_id: x[0]._id, userName:x[0].userName};
        token = generateJWT({data});
        return res.status(200).json(token);
    }).catch(error => {
        res.status(400).send({
            errorCode: 2000,
            error
        })
    })
}
module.exports = {
    login
}