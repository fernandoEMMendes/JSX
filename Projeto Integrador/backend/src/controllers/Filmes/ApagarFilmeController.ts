import { Request, Response } from "express";
import { ApagarFilmeService } from "../../services/Filmes/ApagarFilmeService";

class ApagarFilmeController {
    async handle(req: Request, res: Response) {
        const { filmeId } = req.body
        const service = new ApagarFilmeService()
        const apagar = await service.execute({
            filmeId
        })
        return res.json(apagar)
    }
}

export { ApagarFilmeController }