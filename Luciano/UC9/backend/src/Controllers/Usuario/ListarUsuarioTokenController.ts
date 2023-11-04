import { Request, Response } from "express";
import { ListarUsuarioTokenService } from "../../Services/Usuario/ListarUsuarioTokenService";

export class ListarUsuarioTokenController{
    async handle(req:Request, res:Response) {
        const tokenId = req.user_id
        console.log(tokenId)
        const listar = new ListarUsuarioTokenService()
        const response = await listar.execute({
             tokenId
         })
        return res.json(response)
    }
}