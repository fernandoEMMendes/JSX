import { Request, Response } from "express";
import { LoginClienteService } from "../../Services/Login/LoginClienteService";

export class LoginClienteController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body
        const loginCliente = new LoginClienteService()
        const resposta = await loginCliente.execute({
            email, password
        })
        return res.json(resposta)
    }
}