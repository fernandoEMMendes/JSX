import { Request, Response } from "express";
import { AlterarClienteServices } from "../../services/Clientes/AlterarClienteService";

class AlterarClienteController {
    async handle(req: Request, res: Response) {
        const { id, NovoNome, NovoTelefone, NovoRua, NovoCasa, NovoComplemento, NovoBairro, NovoCidade, NovoEstado } = req.body

        const alterarClienteServices = new AlterarClienteServices()
        const alterar = alterarClienteServices.execute({
            id,
            NovoNome,
            NovoTelefone,
            NovoRua,
            NovoCasa,
            NovoComplemento,
            NovoBairro,
            NovoCidade,
            NovoEstado
        })
        return res.json(alterar)
    }
}

export { AlterarClienteController }