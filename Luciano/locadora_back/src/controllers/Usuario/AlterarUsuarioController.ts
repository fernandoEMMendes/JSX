import { Request, Response } from "express";
import { AlterarUsuarioService } from "../../services/Usuario/AlterarUsuarioService";

class AlterarUsuarioController {
    async handle(req: Request, res: Response) {
        const { usuarioId, novoNome, novoEmail } = req.body
        const alterar = new AlterarUsuarioService()
        const response = await alterar.execute({
            usuarioId,
            novoNome,
            novoEmail
        })
        return res.json(response)
    }
}

export { AlterarUsuarioController }