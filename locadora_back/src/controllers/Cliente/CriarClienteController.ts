import { Request, Response } from "express";
import { CriarClienteService } from "../../services/Cliente/CriarClienteService";

class CriarClienteController {
    async handle(req: Request, res: Response) {
        const { nome, idade, cpf_cnpj, casa, cidade } = req.body
        const criar = new CriarClienteService()
        const response = await criar.execute({
            nome,
            idade,
            cpf_cnpj,
            casa,
            cidade
        })
        return res.json(response)
    }
}

export { CriarClienteController }