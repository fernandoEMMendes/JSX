import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string
}

export function isAuth(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(401).end()
    }

    const [, token] = authToken.split(' ')

    try {
        const { sub } = verify(
            token,
            process.env.JWT_CHAVE
        ) as PayLoad
        console.log(sub)
    } catch (err) {
        return res.status(401).end()
    }
}