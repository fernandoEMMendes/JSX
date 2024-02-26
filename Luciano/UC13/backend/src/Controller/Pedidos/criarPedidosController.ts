import { Request, Response } from "express";
import { criarPedidosService } from "../../Services/Pedidos/criarPedidosService";

export class criarPedidosController {
    async handle(req: Request, res: Response) {
        const { num, status, observacao, clienteId, usuarioId, motoqueiroId, pedido_itemId } = req.body
        const criar = new criarPedidosService()
        const resposta = await criar.execute({
            num, status, observacao, clienteId, usuarioId, motoqueiroId, pedido_itemId
        })
    }
}