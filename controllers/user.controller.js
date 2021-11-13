
const { User } = require('../models');
const utils = require('../shared/utils');



const getOne = (req, res) => {
    utils.getOne(req, res, User);
}
const create = (req, res) => {
    userName = { userName: req.body.userName };
    User.find(userName).then(x => {
        if (x[0] !== undefined) {
            res.status(400).send({
                errorCode: 2001,
            })
        }
        else {
            utils.create(req, res, User);
        }
    }).catch(i => {
        res.status(400).send({
            errorCode: 2000,
        })
    })
}
const deleteMany = async (req, res) => {
    await utils.deleteMany(req, res, User);
}
const update = (req, res) => {
    utils.update(req, res, User);

}
const deleteOne = (req, res) => {
    utils.deleteOne(req, res, User);
}
module.exports = {
    getOne,
    create,
    deleteMany,
    update,
    deleteOne
}