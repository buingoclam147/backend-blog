
const { Blog } = require('../models');
const utils = require('../shared/utils');

var getList = (req, res) => {
    const filter = {};
    const query = req.query;
    let perPage = Number(query.perPage) || 9;
    let page = Number(query.page) || 0;
    if (query.categoryId) filter.categoryId = query.categoryId;
    if (query.userId) filter.userId = query.userId;
    if (query.title) filter.title = { $regex: query.title };
    Blog.find(filter)
        .limit(perPage)
        .skip(perPage * page).then(x => {
            Blog.find(filter).count().then(count => {
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