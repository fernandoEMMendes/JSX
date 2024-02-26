import { Request, Response } from "express";
import { deletarPedidositemService } from "../../Services/Pedidos_item/deletarPedidositemService";

export class deletarPedidositemController {
    async handle(req: Request, res: Response) {
        const { pedidositemId } = req.body
        const deletar = new deletarPedidositemService
        const resposta = await deletar.execute({
            pedidositemId
        })
        return res.json(resposta)
    }
}