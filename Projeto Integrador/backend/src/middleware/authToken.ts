import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface PayLoad {
    sub: string
}

export function autenticado(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(401).end()
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(
            token,
            process.env.AUTH_TOKEN
        ) as PayLoad
        
        //return next para continuar para a proxima função
        //no caso do router.ts, realizar o controller
        return next()

    } catch (err) {
        return res.status(401).end()
    }
}