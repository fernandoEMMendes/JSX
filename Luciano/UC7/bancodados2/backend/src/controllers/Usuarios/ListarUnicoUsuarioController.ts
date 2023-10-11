//importar os midways do express
import { Request, Response } from "express";
//importar services
import { ListarUnicoUsuarioServices } from "../../services/Usuarios/ListarUnicoUsuarioServices"

class ListarUnicoUsuarioController {
    //async [executa a ação sem parar as outras] handle [palavra dedicada] 
    //(req:[abreviação que será utilizada] Request [qual será a ação])
    async handle(req: Request, res: Response) {
        //chamar o 'especificador' do front
        const { id } = req.params
        const listarUnicoUsuarioServices = new ListarUnicoUsuarioServices()
        const response = await listarUnicoUsuarioServices.execute({
            id
        })
        return res.json(response)
    }
}

export { ListarUnicoUsuarioController }