import { Request, Response } from "express"
import { ListarClienteService } from "../../services/Clientes/ListarClienteService"



class ListarClienteController {

    async handle(req: Request, res: Response) {

        const listarClienteService = new ListarClienteService
        const clientes = await listarClienteService.execute()
        return res.json(clientes)
    }
}



export { ListarClienteController }