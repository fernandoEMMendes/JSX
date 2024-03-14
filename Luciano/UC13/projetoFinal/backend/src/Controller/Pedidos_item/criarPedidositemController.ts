import { Request, Response } from "express"
import { criarPedidositemService } from "../../Services/Pedidos_item/criarPedidositemService"

export class criarPedidositemController {
    async handle(req: Request, res: Response) {
        const { produtoId, quant, pedidoId, val_total } = req.body
        console.log(produtoId, quant, pedidoId, val_total)
        //const criar = new criarPedidositemService()
        //const resposta = await criar.execute({
        //    produtoId, quant, val_total, pedidoId
        //})
        //return res.json(resposta)
    }
}