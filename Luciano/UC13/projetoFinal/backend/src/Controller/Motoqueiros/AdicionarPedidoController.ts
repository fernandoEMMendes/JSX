import { Request, Response } from "express"
import { AdicionarPedidoService } from "../../Services/Motoqueiros/AdicionarPedidoService"

export class AdicionarPedidoController {
    async handle(req: Request, res: Response) {
        const { pedidoId, motoqueiroId } = req.body
        const adicionar = new AdicionarPedidoService
        const resposta = await adicionar.execute({
            pedidoId, motoqueiroId
        })
        return res.json(resposta)
    }
}