import { Request, Response } from "express";
import { ApagarUsuarioService } from "../../services/Usuario/ApagarUsuarioService";

class ApagarUsuarioController {
    async handle(req: Request, res: Response) {
        const { usuarioId } = req.body
        const apagar = new ApagarUsuarioService()
        const response = await apagar.execute({
            usuarioId
        })
        return res.json(response)
    }
}

export { ApagarUsuarioController }