const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // const authHeader = req.headers['authorization']
        // const token = authHeader && authHeader.split(' ')[1]
        const token = req.header('Authorization').split(' ')[1];
        // console.log('token', token);
        if (!token) return res.status(400).json({ msg: `don't have JWT` });
        if (token == null) return res.sendStatus(401)
        jwt.verify(token, `9f1fb94532bdafbfd94ffd48cfb1957f94d44fb8447f4ee627ecd05d9916f4dad69c0a75fd9db3b7202336b3b5ca1e210c56ce1e64ea98d4618dd11bc2ab4acb61d0688b88afecfa47dce5504f3a309f57a6e58a7b2da46000c9562602d91eac239e14988afdcf1ede7bf979cc72e7c53fff71afeceece1899d4fad08c90bc95e2fcf16d200654a53f358711293b4bbaa10505efb407bf79d930460febbe34db2eec49db0e4e651263761ee1bdb589738d86e14fa9c4df4e80e4aab51236732ccd409e6329a96ada86aa1b45ad70092178580505252cafd83c60723a4f187c653206593d41f92487e5c0c24c587fafcb10669cd60b2fd685bdb680c9e960ce3d`, (err, user) => {
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