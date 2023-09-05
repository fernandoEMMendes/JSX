import { Response, Request } from "express";
import { CriarClienteService } from "../../services/Clientes/CriarClienteService";


class CriarClienteController {

    async handle(req: Request, res: Response) {
        const { nome, cpf_cnpj, rg_ie, telefone, rua, casa, complemento, bairro, cidade, estado } = req.body

        const criarClienteService = new CriarClienteService()
        const clientes = await criarClienteService.execute({
            nome,
            cpf_cnpj,
            rg_ie,
            telefone,
            rua,
            casa,
            complemento,
            bairro,
            cidade,
            estado
        })
        return res.json(clientes)
    }
}


export { CriarClienteController }