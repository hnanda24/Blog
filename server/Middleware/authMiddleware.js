const jwt = require('jsonwebtoken')
const SECRET = 'blablabla';

const userCheck = (req,res,next) => {
    const token = req.header("Authorization");

    if(!token) res.status(404).json({ "message": "Token not found"})
    
        try
        {
            const decode = jwt.verify(token, secret);
            
            next();
        }

        catch(err)
        {
            res.status(401).json({"message": err})
        }
    }

module.exports = userCheck;