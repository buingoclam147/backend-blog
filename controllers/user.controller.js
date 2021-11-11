
const { User } = require('../models');
const utils = require('../shared/utils');



const getOne = (req, res) => {
    utils.getOne(req, res, User);
}
const create = (req, res) => {
    utils.create(req, res, User);
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