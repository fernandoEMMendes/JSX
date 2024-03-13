import { Request, Response } from "express";
import { cancelarPedidosItemService } from "../../Services/Pedidos_item/cancelarPedidositemService";

export class cancelarPedidosItemController {
    async handle(req: Request, res: Response) {
        const { pedidoId } = req.body
        const cancelar = new cancelarPedidosItemService()
        const resposta = await cancelar.execute({
            pedidoId
        })
        return res.json(resposta)
    }
}