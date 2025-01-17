import { Request, Response } from "express";
import { AlterarUsuarioServices } from "../../services/Usuarios/AlterarUsuarioServices";

class AlterarUsuarioController {
    async handle(req: Request, res: Response) {
        const { id, NovoNome, NovoEmail } = req.body

        const alterarUsuarioServices = new AlterarUsuarioServices()
        const alterar = await alterarUsuarioServices.execute({
            id,
            NovoNome,
            NovoEmail
        })
        return res.json(alterar)
    }
}

export { AlterarUsuarioController }