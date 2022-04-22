const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // const authHeader = req.headers['authorization']
        // const token = authHeader && authHeader.split(' ')[1]
        const token = req.header('Authorization').split(' ')[1];
        console.log('token', token);
        if (!token) return res.status(400).json({ msg: `don't have JWT` });
        if (token == null) return res.sendStatus(401)
        jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err, user) => {
            console.log(err)
            if (err) return res.sendStatus(403).json({ msg: `wrong JWT ` })
            req.user = user;
            next();
        });
    // }
    // catch (err) {
    //     return res.status(500).json({ msg: 'err JWT' });
    // }

}

module.exports = authenticateToken;