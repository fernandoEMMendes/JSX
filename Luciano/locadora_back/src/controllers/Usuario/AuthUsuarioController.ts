import { Request, Response } from "express";
import { AuthUsuarioServices } from "../../services/Usuario/AuthUsuarioService";

class AuthUsuarioController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body
        const auth = new AuthUsuarioServices()
        const response = await auth.execute({
            email,
            password
        })
        return res.json(response)
    }
}

export { AuthUsuarioController }