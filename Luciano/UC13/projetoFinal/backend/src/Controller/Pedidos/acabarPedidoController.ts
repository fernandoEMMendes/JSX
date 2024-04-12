import { Request, Response } from "express"
import { AcabarServicoService } from "../../Services/Pedidos/acabarPedidoService"

export class AcabarServicoController {
    async handle(req: Request, res: Response) {
        const { novoEntrega, pedidoId} = req.body
        const acabar = new AcabarServicoService
        const resposta = await acabar.execute({
            novoEntrega, pedidoId
        })
        return res.json(resposta)
    }
}