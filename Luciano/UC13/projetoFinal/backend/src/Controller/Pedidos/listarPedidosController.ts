import { Request, Response } from "express";
import { listarPedidosService } from "../../Services/Pedidos/listarPedidosService";

export class listarPedidosController {
    async handle(req: Request, res: Response) {
        const listar = new listarPedidosService()
        const resposta = await listar.execute()
        return res.json(resposta)
    }
}