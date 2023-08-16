import { Request, Response } from "express"
import prismaClient from "../../prisma"



class ListarClienteController {

    async handle(req: Request, res: Response) {

        const clientes = await prismaClient.client.findMany({})
        return res.json(clientes)
    }
}



export { ListarClienteController }