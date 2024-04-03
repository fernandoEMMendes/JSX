import { Request, Response } from "express"
import { finalizarPedidoCozinhaService } from "../../Services/Pedidos/finalizarPedidoCozinhaService"

export class finalizarPedidoCozinhacontroller {
    async handle(req: Request, res: Response) {
        const { novoAceito, pedidoId, novoStatus } = req.body
        const finalizar = new finalizarPedidoCozinhaService
        const resposta = await finalizar.execute({
            novoAceito, novoStatus, pedidoId
        })
        return res.json(resposta)
    }
}