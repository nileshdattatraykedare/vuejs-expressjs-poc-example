import * as jwt from "jsonwebtoken";
import config from '../confs/config'
export function verifyLogin(req, res) {
    /*
             * Check if the username and password is correct
             */
    if( req.body.username === 'admin' && req.body.password === 'admin' ) {
        res.json({
            id: 1,
            username: 'admin',
            token: jwt.sign({
                id: 1,
            }, config.JWT_SECRET, { expiresIn: 30*24*60*60 })
        });
    } else {
        /*
         * If the username or password was wrong, return 401 ( Unauthorized )
         * status code and JSON error message
         */
        res.status(401).json({
            error: {
                message: 'Wrong username or password!'
            }
        });
    }
}