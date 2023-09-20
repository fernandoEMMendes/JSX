import { Response, Request} from "express";
import { LoginUsuarioServices } from "../../services/Usuarios/LoginUsuarioService";


class LoginUsuarioController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body
        const loginUsuarioServices = new LoginUsuarioServices()
        const response = loginUsuarioServices.execute({
            email,
            senha
        })
        return res.json(response)
    }
}

export { LoginUsuarioController }
