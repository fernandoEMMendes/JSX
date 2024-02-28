import { Request, Response } from "express";
import { ListarClientesUnicoService } from "../../Services/Clientes/ListarClientesUnicoService";

export class ListarClientesUnicoController {
    async handle(req: Request, res: Response) {
        const { clienteID } = req.body
        const listarUnico = new ListarClientesUnicoService()
        const resposta = await listarUnico.execute({
            clienteID
        })
        return res.json(resposta)
    }
}