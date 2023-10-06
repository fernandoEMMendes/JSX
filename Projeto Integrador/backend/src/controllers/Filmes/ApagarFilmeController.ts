import { Request, Response } from "express";
import { ApagarFilmeService } from "../../services/Filmes/ApagarFilmeService";

class ApagarFilmeController {
    async handle(req: Request, res: Response) {
        const { filmeId } = req.body
        const apagar = new ApagarFilmeService()
        const response = await apagar.execute({
            filmeId
        })
        return res.json(response)
    }
}

export { ApagarFilmeController }