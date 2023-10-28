import Navbar from "react-bootstrap/Navbar"

import "./header.scss"

import logo from "../../imgs/logoVistase.png"

export default function Header() {
    return (
        <div className="headerCSS">
            <Navbar>
                <Navbar.Brand href="/"><img src={logo} /></Navbar.Brand>
                <Navbar.Text><a className="headerLoginCSS" href="/Login">Login</a></Navbar.Text>
            </Navbar>
        </div>
    )
}