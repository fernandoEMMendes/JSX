import { Request, Response } from "express";
import { atualizarPedidositemService } from "../../Services/Pedidos_item/atualizarPedidositemService";

export class atualizarPedidositemController {
    async handle(req: Request, res: Response) {
        const { pedidositemId, novaQuant } = req.body
        const atualizar = new atualizarPedidositemService()
        const resposta = await atualizar.execute({
            pedidositemId, novaQuant
        })
        return res.json(resposta)
    }
}