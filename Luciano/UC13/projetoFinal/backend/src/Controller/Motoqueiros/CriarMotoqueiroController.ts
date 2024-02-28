import {Request, Response} from "express"
import { CriarMotoqueiroService } from "../../Services/Motoqueiros/CriarMotoqueiroService"

export class CriarMotoqueiroController {
    async handle(req:Request, res:Response){
        const {nome, nusuario, senha} = req.body
        const criarMotoqueiroService = new CriarMotoqueiroService()
        const Criar = await criarMotoqueiroService.execute({
            nome, nusuario, senha
        })
        return res.json(Criar)
    }
}