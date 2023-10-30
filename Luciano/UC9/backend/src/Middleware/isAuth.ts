import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string
}

export function isAuth(req: Request, res: Response, next: NextFunction) {
    const autentToken = req.headers.authorization

    if (!autentToken) {
        return res.status(401).end()
    }
    const [, token] = autentToken.split(' ')
    
    try {
        const { sub } = verify(
            token,
            process.env.JWT_KEY
        ) as PayLoad
        req.user_id = sub
        return next()

    } catch (err) {
        return res.status(401).end()
    }
}