//esse arquivo ira reescrever o midway de request do express adicionando o atributo user_id como sendo uma string
//isso quer dizer que o user_id ficara junto com request, response, nextFunction
//EX: req.user_id

declare namespace Express {
    export interface Request {
        user_id: string
    }
}