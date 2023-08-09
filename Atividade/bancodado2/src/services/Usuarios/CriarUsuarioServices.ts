
interface CriarUsuario{
    nome : string
    email : string
    senha : string
}

class CriarUsuarioService{
    async execute({nome, email, senha} : CriarUsuario){


    }
}


export {CriarUsuarioService}