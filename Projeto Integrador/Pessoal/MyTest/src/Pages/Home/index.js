import {useState, useRef} from "react"

export default function Home() {

    const [vida, setvida] = useState(100)
    
    
    
    
    
    
    
    
    return (
        <>
            <div>
                <h1>Home</h1><br /><br />
                <a>HP: {vida}</a> <br /><br />
                <a>(o_o)</a>
            </div>
        </>
    )
}