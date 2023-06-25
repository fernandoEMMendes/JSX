import { useState, useRef } from "react"

import "../../css/Home.css"

export default function Home() {

    const [vida, setvida] = useState(100)
    const [vida2, setvida2] = useState(100)

    function random(min, max) {
        return Math.floor(Math.random(min, max));
    }

    function attack() {
        if (vida2 <= 0) {
            alert("Venceu!")
        } else {
            setvida2 (vida2 - 5)
        }
    }




    return (
        <>
            <div>
                <h1>Luta</h1><br /><br />
                <button onClick={attack}>attack</button><br /> <br />

                <a>HP: {vida}</a> <br />
                <a>(o_o)</a><br /><br />

                <a>HP: {vida2}</a><br /><br />
                <a>()_()</a><br />
            </div>
        </>
    )
}