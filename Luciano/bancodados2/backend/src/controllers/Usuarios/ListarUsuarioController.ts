import { Request, Response } from "express";
import prismaClient from "../../prisma";



class ListarUsuarioController {

    async handle(req: Request, res: Response) {

        const usuarios = await prismaClient.user.findMany({})
        return res.json(usuarios)
    }
}


export { ListarUsuarioController }