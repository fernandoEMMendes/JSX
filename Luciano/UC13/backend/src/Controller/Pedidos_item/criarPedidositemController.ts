import { Request, Response } from "express"
import { criarPedidositemService } from "../../Services/Pedidos_item/criarPedidositemService"

export class criarPedidositemController {
    async handle(req: Request, res: Response) {
        const { produtoId, quant, val_unit, val_total } = req.body
        const criar = new criarPedidositemService()
        const resposta = await criar.execute({
            produtoId, quant, val_total, val_unit
        })
        return res.json(resposta)
    }
}