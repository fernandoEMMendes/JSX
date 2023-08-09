import { Request, Response } from "express"
import { CriarUsuarioService } from "../../services/Usuarios/CriarUsuarioServices"


class CriarUsuarioController{

    async handle(req:Request , res:Response){
        const { nome, email, senha } = req.body
        
        const criarUsuarioService = new CriarUsuarioService()
        const usuarios = await criarUsuarioService.execute({
            nome,
            email,
            senha
        })
        return res.json(usuarios)
    }
}


export {CriarUsuarioController}