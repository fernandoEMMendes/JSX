import { Request, Response } from "express"
import { ListarMotoqueiroService } from "../../Services/Motoqueiros/ListarMotoqueiroService"

export class ListarMotoqueiroController{
    async handle(req: Request, res: Response){

        const Listar = new ListarMotoqueiroService()
        const resposta = await Listar.execute()
        return res.json(resposta)
    }
}