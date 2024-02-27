import { Request, Response } from "express";
import { criarPedidosService } from "../../Services/Pedidos/criarPedidosService";

export class criarPedidosController {
    async handle(req: Request, res: Response) {
        const { draft, entrega, ped_val_total, num, status, observacao, clienteId, motoqueiroId } = req.body
        const criar = new criarPedidosService()
        const resposta = await criar.execute({
            draft, entrega, ped_val_total, num, status, observacao, clienteId, motoqueiroId
        })
        return res.json(resposta)
    }
}