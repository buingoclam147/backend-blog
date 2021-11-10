const { Censor } = require('../models');
const utils = require('../shared/utils');

var getList = (req, res) => {
    const query = req.query;
    let perPage = Number(query.perPage) || 10;
    let page = Number(query.page) || 0;
    let fullName = query.fullName ? query.fullName : '';
    let address = query.address ? query.address : '';
    let filter = {
        fullName: { $regex: fullName },
        address: { $regex: address },
    }
    query.sex && query.sex != "null" ? filter.sex = query.sex : filter;
    Censor.find(filter)
        .limit(perPage)
        .skip(perPage * page).then(x => {
            Censor.find(filter).count().then(count => {
                res.send({
                    total: count,
                    data: x
                })
            })
        })

    // .sort({
    //     name: 'asc'
    // })
    // .exec(function(err, events) {
    //     Censor.count().exec(function(err, count) {
    //         res.render('events', {
    //             events: events,
    //             page: page,
    //             pages: count / perPage
    //         })
    //     })
    // })

}


const getOne = (req, res) => {
    utils.getOne(req, res, Censor);
}
const create = (req, res) => {
    utils.create(req, res, Censor);
}
const deleteMany = async (req, res) => {
    await utils.deleteMany(req, res, Censor);
}
const update = (req, res) => {
    utils.update(req, res, Censor);

}
const deleteOne = (req, res) => {
    utils.deleteOne(req, res, Censor);
}
module.exports = {
    getList,
    getOne,
    create,
    deleteMany,
    update,
    deleteOne
}