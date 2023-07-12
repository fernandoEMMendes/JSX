import "./Casual.css"

import casualM1 from "../../imgs/casualM1.jpg"
import casualM2 from "../../imgs/casualM2.jpg"
import casualM3 from "../../imgs/casualM3.jpg"

import casualF1 from "../../imgs/casualF1.png"
import casualF2 from "../../imgs/casualF2.jpg"
import casualF3 from "../../imgs/casualF3.png"


export default function RoupaCasual() {
    return (
        <>
            <div className="aligntitle">
                <h1>Roupa Casual</h1>
            </div>

            <div className="imgs">
                <img className="img-fluid img-thumbnail" src={casualM1} alt="img1" style={{ width: 300 }} />
                <img className="img-fluid img-thumbnail" src={casualM2} alt="img2" style={{ width: 300 }} />
                <img className="img-fluid img-thumbnail" src={casualM3} alt="img3" style={{ width: 300 }} />

                <img className="img-fluid img-thumbnail" src={casualF1} alt="img4" style={{ height: 380, width: 300 }} />
                <img className="img-fluid img-thumbnail" src={casualF2} alt="img5" style={{ width: 300 }} />
                <img className="img-fluid img-thumbnail" src={casualF3} alt="img6" style={{ height: 380, width: 300 }} />
            </div>
        </>
    )
}