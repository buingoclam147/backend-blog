const express = require('express')
const router = express.Router();
const authenticateToken = require('../middlerwares/authenticateToken');
const { login,checkAccout } = require('../controllers/auth.controller');

router.post('/', login);
router.get('/', authenticateToken , checkAccout);
module.exports = router;