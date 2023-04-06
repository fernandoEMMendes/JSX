import React, { useState } from "react"

function Contato() {
    const [Nome, SetNome] = useState("")
    const [Senha, SetSenha] = useState("")
    const [Email, SetEmail] = useState("")
    const [Sexo, SetSexo] = useState("")

    function Cadastro() {
        if (Nome === '' || Email === '' || Senha === '' || Sexo === '') {
            alert('Preencha todos os Campos')
        }
        else
            alert ("Enviado com sucesso!")
    }


    return (
        <>
            <div class="caixa">
                <h1>Formulario</h1>
                <form onSubmit={Cadastro}>
                    <label>Nome:</label>
                    <input type="text"
                        value={Nome}
                        onChange={(e) => SetNome(e.target.value)} /> <br /> <br />


                    <label>Senha:</label>
                    <input type="password"
                        value={Senha}
                        onChange={(e) => SetSenha(e.target.value)} /> <br /> <br />


                    <label>Email:</label>
                    <input type="email"
                        value={Email}
                        onChange={(e) => SetEmail(e.target.value)} /> <br /> <br />


                    <label>Sexo:  </label>
                    <select value={Sexo}
                        onChange={(e) => SetSexo(e.target.value)}>

                        <option value="">Selecione um</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select> <br /> <br />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
}

export default Contato