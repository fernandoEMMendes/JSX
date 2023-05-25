

import vo3 from "../../imgs/IMG-20230511-WA0020.jpg"
import vo3texto from "../../imgs/IMG-20230511-WA0021.jpg"
import capilarize from "../../imgs/IMG-20230511-WA0022.jpg"
import capilarizetexto from "../../imgs/IMG-20230511-WA0023.jpg"

function Produtos() {
    return (
        <>
            <div>
                <a className="titulo">Junto com nossos serviços oferecemos também produtos para complementar o tratamento para melhores resultados</a><br /> <br /> <br /> <br /> <br />
            </div>
            <div className="grid-container">
                <div><h2 className="h2produtos">VO³</h2> <br /></div>
                <div>
                    <img src={vo3} width="250" alt="òleo de peixe VO³" /> <br />
                    <img src={vo3texto} width="250" alt="Descrição VO³" /> <br /> <br />
                </div>
                <div><h2 className="h2produtos">Capilarize+</h2> <br /></div>
                <div>
                    <img src={capilarize} width="250" alt="Suplemento alimentar Capilarize+" /> <br />
                    <img src={capilarizetexto} width="250" alt="Descrição Capilarize+" /><br />
                </div>
                <h1>.</h1>
            </div>
        </>
    )
}


export default Produtos