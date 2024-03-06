import { Request, Response } from "express";
import { deletarPedidosService } from "../../Services/Pedidos/deletarPedidosService";

export class deletarPedidosController {
    async handle(req: Request, res: Response) {
        const { pedidoId } = req.body
        const criar = new deletarPedidosService()
        const resposta = await criar.execute({
            pedidoId
        })
        return res.json(resposta)
    }
}