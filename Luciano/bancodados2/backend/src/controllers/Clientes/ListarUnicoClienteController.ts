import { Request, Response } from "express";
import { ListarUnicoClienteServices } from "../../services/Clientes/ListarUnicoClienteService";

class ListarUnicoClienteController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const listarUnicoClienteServices = new ListarUnicoClienteServices()
        const response = await listarUnicoClienteServices.execute({
            id
        })
        return res.json(response)
    }
}


export { ListarUnicoClienteController }