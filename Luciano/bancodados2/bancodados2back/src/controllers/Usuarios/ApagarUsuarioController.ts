import { Request, Response } from "express"
import { ApagarUsuarioServices } from "../../services/Usuarios/ApagarUsuarioService"

class ApagarUsuarioController {
    async handle(req: Request, res: Response) {
        //remove = chave de identificação, nesse caso ele representa o id
        const { remove } = req.body
        const apagarUsuarioServices = new ApagarUsuarioServices()
        const apagar = await apagarUsuarioServices.execute({
            remove
        })
        return res.json(apagar)
    }
}

export { ApagarUsuarioController }