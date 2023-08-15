import { Response, Request } from "express";
import { CriarClienteService } from "../../services/Clientes/CriarClienteServices";


class CriarClienteController {

    async handle(req: Request, res: Response){
        const {nome, cpf, cel_tel, cel_fixo, rua, numero, complemento, bairro, cidade, estado} = req.body

        const criarClienteService = new CriarClienteService()
        const clientes = await criarClienteService.execute({
            nome,
            cpf,
            cel_tel,
            cel_fixo,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        })
        return res.json(clientes)
    }
}


export {CriarClienteController}