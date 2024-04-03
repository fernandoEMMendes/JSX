import { Request, Response } from "express";
import { confirmarPedidoService } from "../../Services/Pedidos/confirmarPedidoService";

export class confirmarPedidoController {
    async handle(req: Request, res: Response) {
        const { pedidoId, novoObservacao, novoDraft, novoRascunho, novoValor } = req.body
        const confirmar = new confirmarPedidoService()
        const resposta = await confirmar.execute({
            pedidoId, novoObservacao, novoDraft, novoRascunho, novoValor
        })
        return res.json(resposta)
    }
}