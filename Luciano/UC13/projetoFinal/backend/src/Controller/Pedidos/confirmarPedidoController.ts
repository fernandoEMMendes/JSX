import { Request, Response } from "express";
import { confirmarPedidoService } from "../../Services/Pedidos/confirmarPedidoService";

export class confirmarPedidoController {
    async handle(req: Request, res: Response) {
        const { pedidoId, novoObservacao, novoDraft } = req.body
        console.log(pedidoId, novoDraft, novoObservacao)
        const confirmar = new confirmarPedidoService()
        const resposta = await confirmar.execute({
            pedidoId, novoObservacao, novoDraft
        })
        return res.json(resposta)
    }
}