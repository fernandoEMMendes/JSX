import { Request, Response } from "express";
import { ApagarClienteService } from "../../services/Clientes/ApagarClienteService";


class ApagarClienteController {
    async handle(req: Request, res: Response) {
        const { remove } = req.body
        const apagarClienteController = new ApagarClienteService()
        const apagar = await apagarClienteController.execute({
            remove
        })
    }
}

export { ApagarClienteController }