import "./Header.css"
import { Container, Nav, Navbar } from "react-bootstrap";


function Header() {
    return (
        <Navbar className="BackgroundHeader" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    LOGO
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Servicos">Serviços</Nav.Link>
                        <Nav.Link href="/Produtos">Produtos</Nav.Link>
                        <Nav.Link href="/QuemSomos">Quem Somos?</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Header