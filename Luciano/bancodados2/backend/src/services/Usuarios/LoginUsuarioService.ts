interface Login {
    email: string
    senha: string
}

class LoginUsuarioServices {
    async execute({ email, senha }: Login) {
        console.log(email, senha)
    }
}

export { LoginUsuarioServices }