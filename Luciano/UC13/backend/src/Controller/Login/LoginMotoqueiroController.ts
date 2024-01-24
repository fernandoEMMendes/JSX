import { Request, Response } from "express";
import { LoginMotoqueiroService } from "../../Services/Login/LoginMotoqueiroService";

export class LoginMotoqueiroController {
    async handle(req: Request, res: Response) {
        const { nusuario, password } = req.body
        console.log(nusuario, password)

        const login = new LoginMotoqueiroService()
        const resposta = await login.execute({
            nusuario,
            password
        })
        return res.json(resposta)
    }
}