import Carousel from "react-bootstrap/Carousel"

import "./Produtos.css"

import vo3 from "../../imgs/IMG-20230511-WA0020cop.jpg"
import vo3texto from "../../imgs/IMG-20230511-WA0021cop.jpg"
import capilarize from "../../imgs/IMG-20230511-WA0022cop.jpg"
import capilarizetexto from "../../imgs/IMG-20230511-WA0023cop.jpg"

function Produtos() {
    return (
        <>
            <div className="align">
                <Carousel className="carousel" interval="99999" variant="dark">
                    <Carousel.Item>
                        <img className="d-flex w-100" alt="tes" src={vo3} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-flex w-100" alt="tes" src={vo3texto} />
                    </Carousel.Item>
                </Carousel>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <Carousel className="carousel" interval="99999" variant="dark">
                    <Carousel.Item>
                        <img className="d-flex w-100" alt="tes" src={capilarize} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-flex w-100" alt="tes" src={capilarizetexto} />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}


export default Produtos