import { Request, Response } from "express";
import { CriarClientesService } from "../../Services/Clientes/CriarClientesService";

export class CriarClientesController {
    async handle(req: Request, res: Response) {
        const { nome, tel_cel, email, senha, cpf, cep, nMoradia, rua, bairro, cidade } = req.body
        const criar = new CriarClientesService()
        const resposta = await criar.execute({
            nome, tel_cel, email, senha, cpf, cep, nMoradia, rua, bairro, cidade
        })
        return res.json(resposta)
    }
}