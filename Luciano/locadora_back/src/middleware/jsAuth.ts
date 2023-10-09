import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string
}

export function Autenticado(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization

    if (!auth) {
        return res.status(401).end()
    }

    const [, token] = auth.split(" ")

    try {
        const { sub } = verify(
            token,
            process.env.KEY_JWT
        ) as PayLoad

        console.log(sub)

    } catch (err) {
        return res.status(401).end()
    }
}