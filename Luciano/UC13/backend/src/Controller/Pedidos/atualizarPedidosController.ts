import { Request, Response } from "express";
import { atualizarPedidosService } from "../../Services/Pedidos/atualizarPedidosService";

export class atualizarPedidosController {
    async handle(req: Request, res: Response) {
        const { pedidoId, novoDraft, novoEntrega, novoPed_val_total, novoNum, novoStatus, novoObservacao, novoClienteId, novoMotoqueiroId } = req.body
        const criar = new atualizarPedidosService()
        const resposta = await criar.execute({
            pedidoId, novoClienteId, novoDraft, novoEntrega, novoMotoqueiroId, novoNum, novoObservacao, novoPed_val_total, novoStatus
        })
    }
}