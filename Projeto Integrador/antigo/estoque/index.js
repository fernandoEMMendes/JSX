import "../../components/css/tabela.css"

function Estoque() {
    return (
<div>
    <h2 class="titulo">Todos os tipos, marcas e gostos</h2><table border="1" align="left" width="400" heigh="100">

        <tr>

            <th rowspan="1">Produto</th>
            <th colspan="1">Fabricante</th>
            <th>Disponibilidade</th>
        </tr>
        <tr>
            <td rowspan="5">Camisetas</td>
            <td>Adidas</td>
            <td class="disponivel"> Disponível </td>
        </tr>
        <tr>
            <td>Puma</td>
            <td class="naodisponivel"> Não Disponível </td>
        </tr>
        <tr>

            <td>Oxer</td>
            <td class="disponivel"> Disponível </td>
        </tr>
        <tr>

            <td>Hawaiian Dreams</td>
            <td class="naodisponivel">Não Disponível </td>
        </tr>
        <tr>

            <td>Lacoste</td>
            <td class="disponivel"> Disponível </td>
        </tr>







        <tr>
            <td rowspan="5">Calças</td>
            <td>Renner</td>
            <td class="disponivel">Disponível</td>
        </tr>
        <tr>
            <td>Almix</td>
            <td class="naodisponivel">Não Disponível</td>
        </tr>
        <tr>
            <td>Heyju</td>
            <td class="naodisponivel">Não Disponível</td>
        </tr>
        <tr>
            <td>Vit Jeans</td>
            <td class="disponivel">Disponível</td>
        </tr>
        <tr>
            <td>Wrangler</td>
            <td class="disponivel">Disponível</td>
        </tr>




        <tr>
            <td rowspan="5">Ténis</td>
            <td> Mizuno </td>
            <td class="disponivel">Disponível</td>
        </tr>
        <tr>
            <td>Puma</td>
            <td class="disponivel">Disponível</td>
        </tr>
        <tr>
            <td>Nike</td>
            <td class="disponivel">Disponível</td>
        </tr>
        <tr>
            <td>Nike</td>
            <Td class="naodisponivel">Não Disponível</Td>
        </tr>
        <tr>
            <td>All Stars</td>
            <td class="naodisponivel">Não Disponível</td>
        </tr>
        </table>
        </div>
    )
}

export default Estoque