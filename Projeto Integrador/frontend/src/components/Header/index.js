import LOGO from "../../imgs/logo.png"
import "./Header.css"

export default function Header() {
    return (
        <div class="header">
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="/"><img src={LOGO} alt="LOGO" style={{width: 50, height: 60}}/></a>
                <a class="navbar-brand" href="/">Vista-se! | Vestuario e identidade</a>
                <a class="link" href="/Login">Login</a>
            </nav>
        </div>
    )
}