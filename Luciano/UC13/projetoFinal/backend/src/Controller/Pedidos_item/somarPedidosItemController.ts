import { Request, Response } from "express"
import { somarPedidosItemService } from "../../Services/Pedidos_item/somarPedidosItemService"

export class somarPedidosItemController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const somar = new somarPedidosItemService
        const resposta = await somar.execute({
            id
        })
        return res.json(resposta)
    }
}