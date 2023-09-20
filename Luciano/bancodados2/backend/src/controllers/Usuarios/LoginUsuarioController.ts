import { Response, Request } from "express";
import { LoginUsuarioServices } from "../../services/Usuarios/LoginUsuarioService";


class LoginUsuarioController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body
        const loginUsuarioServices = new LoginUsuarioServices()
        const Response = loginUsuarioServices.execute({
            email,
            senha
        })
    }
}

export { LoginUsuarioController }
