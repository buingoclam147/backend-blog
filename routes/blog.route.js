const express = require('express')
const router = express.Router();
const authenticateToken = require('../middlerwares/authenticateToken');

const { getList, getOne, create, deleteMany, update, deleteOne } = require('../controllers/Blog.controller');

router.get('/', getList)
router.get('/:id', getOne);
router.post('/', authenticateToken, create);
router.post('/delete-many',authenticateToken,  deleteMany);
router.patch('/:id', update);
router.delete('/:id',authenticateToken, deleteOne);
module.exports = router;