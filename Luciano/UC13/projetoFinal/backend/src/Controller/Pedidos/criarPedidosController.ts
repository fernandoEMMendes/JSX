import { Request, Response } from "express";
import { criarPedidosService } from "../../Services/Pedidos/criarPedidosService";

export class criarPedidosController {
    async handle(req: Request, res: Response) {
        const { clienteId } = req.body
        const criar = new criarPedidosService()
        const resposta = await criar.execute({
            clienteId
        })
        return res.json(resposta)
    }
}