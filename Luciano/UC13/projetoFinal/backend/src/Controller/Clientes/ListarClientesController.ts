import { Request, Response } from "express";
import { ListarClientesService } from "../../Services/Clientes/ListarClientesController";

export class ListarClientesController {
    async handle(req: Request, res: Response) {
        const listar = new ListarClientesService()
        const resposta = await listar.execute()
        return res.json(resposta)
    }
}