import { Request, Response } from "express";
import { aceitarPedidoService } from "../../Services/Pedidos/aceitarPedidoService";

export class aceitarPedidoController {
    async handle(req: Request, res: Response) {
        const { novoAceito, pedidoId, novoRascunho } = req.body
        const aceitar = new aceitarPedidoService()
        const resposta = await aceitar.execute({
            novoAceito, pedidoId, novoRascunho
        })
        return res.json(resposta)
    }
}