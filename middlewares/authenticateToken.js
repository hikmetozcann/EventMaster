import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import process from "process";
config();
const authenticateToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);
    
        jwt.verify(token, process.env.AUTH_SECRET_KEY, (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            console.log(user);
            next();
        });
    };

export default authenticateToken;