import { Response, Request} from "express";
import { LoginUsuarioServices } from "../../services/Usuarios/LoginUsuarioService";


class LoginUsuarioController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body
        const loginUsuarioServices = new LoginUsuarioServices()
        const response = loginUsuarioServices.execute({
            email,
            password
        })
        return res.json(response)
    }
}

export { LoginUsuarioController }
