import { useState } from "react"

function Produtos() {




    return (
        <div>
            <table>
                <button onClick={function () { disponibilidade(); disponibilidade2(); disponibilidade3(); }}>Verificar disponibilidade</button>
                <tr>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Estoque</th>
                </tr>

                <tr>
                    <td>Camisetas</td>
                    <td>Adidas</td>
                    <td>Disponível</td>
                </tr>
                <tr>
                    <td>Calças</td>
                    <td>Nike</td>
                    <td>Indisponível</td>
                </tr>
                <tr>
                    <td>Calçados</td>
                    <td>Mizuno</td>
                    <td>disponivel</td>
                </tr>
                <tr>
                    <td>Bonés</td>
                    <td>Oakley</td>
                    <td>Disponível</td>
                </tr>

            </table>
        </div >
    )

}

export default Produtos