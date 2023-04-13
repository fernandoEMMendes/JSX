import React, { useState } from "react"

import "../../components/css/Cadastro.css"

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
            alert("Enviado com sucesso!")
    }


    return (
        <>
            <h2>Formulario</h2>
            <div class="borda">
                <div class="caixa">
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
            </div>
        </>
    );
}

export default Contato