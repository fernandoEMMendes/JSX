import "./Home.css"
import casual from "../../imgs/download.jpg"
import formal from "../../imgs/ds.png"
import demo from "../../imgs/demoman 4k.jpeg"


export default function Home() {
    return (
        <>

            <h1 className="aligntitle">Vista-se!</h1>
            <h1 className="aligntitle">De uma cara nova a você!</h1><br />
            <h1 className="aligntitle">O que você está procurando hoje?</h1> <br />


            <div className="aligncard">
                <div className="container">
                    <div className="row">

                        <div className="col-md">

                            <div className="card bg-dark w-100">
                                <img className="card-img-top" src={demo} width="300" href="/RC" />
                                <div className="card-body">
                                    <a role="button" className="btn btn-lg btn-primary text-light" href="/RC">Que tal algo Casual?</a>
                                </div>
                            </div>

                        </div>


                        <div className="col-md">

                            <div className="card bg-dark w-100">
                                <img className="card-img-top" src={demo} width="300" href="/RF" />
                                <div className="card-body">
                                    <a href="/RF"  role="button" className="btn btn-lg btn-primary text-light" >Ou algo mais Formal?</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <br /> <br /> <br />

            <div className="aligntitle">
                <h3>google maps aqui</h3>
            </div>

            <br /> <br />

            <div className="aligntitle">
                <a>Encontrou algum erro ou gostaria de enviar alguma recomendação?</a>
                <br />
                <a href="/contato">Contate-nos</a>
            </div>

        </>
    )
}