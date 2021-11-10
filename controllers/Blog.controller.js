
const { Blog } = require('../models');
const utils = require('../shared/utils');

var getList = (req, res) => {
    const query = req.query;
    let perPage = Number(query.perPage) || 10;
    let page = Number(query.page) || 0;
    let searchName = query.searchName ? query.searchName : '';
    Blog.find({
        title: { '$regex': `${searchName}` }
    })
        .limit(perPage)
        .skip(perPage * page).then(x => {
            Blog.find({
                title: { '$regex': `${searchName}` }
            }).count().then(count => {
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
    //     Blog.count().exec(function(err, count) {
    //         res.render('events', {
    //             events: events,
    //             page: page,
    //             pages: count / perPage
    //         })
    //     })
    // })

}


const getOne = (req, res) => {
    utils.getOne(req, res, Blog);
}
const create = (req, res) => {
    utils.create(req, res, Blog);
}
const deleteMany = async (req, res) => {
    await utils.deleteMany(req, res, Blog);
}
const update = (req, res) => {
    utils.update(req, res, Blog);

}
const deleteOne = (req, res) => {
    utils.deleteOne(req, res, Blog);
}
module.exports = {
    getList,
    getOne,
    create,
    deleteMany,
    update,
    deleteOne
}