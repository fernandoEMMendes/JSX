import "./Header.css"
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"

function Header() {
    return (
        <Container fluid>
            <Navbar className="BackgroundHeader" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        LOGO
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="TextHeader" href="/Servicos">Serviços</Nav.Link>
                            <Nav.Link href="/Produtos">Produtos</Nav.Link>
                            <Nav.Link href="/QuemSomos">Quem Somos?</Nav.Link>
                            <Nav.Link href="/Contato">Contate-nos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}


export default Header