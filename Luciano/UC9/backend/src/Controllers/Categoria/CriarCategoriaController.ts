import { Request, Response } from "express"
import { CriarCategoriaService } from "../../Services/Categoria/CriarCategoriaServices"


class CriarCategorias {
    async handle(req: Request, res: Response) {
        const { nome } = req.body

        const criar = new CriarCategoriaService()
        const resposta = await criar.execute({
            nome
        })
        return res.json(resposta)
    }

}

export { CriarCategorias }