import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./home.scss"
import placeholder from "../../imgs/placeholder.png"

export default function Home() {
    return (
        <Container>
            <Container className="homeTituloCSS">
                <h1>Vista-se!</h1>
                <h1>Bem-vindo!</h1>
            </Container>

            <Row>
                <Col>
                    <Card className="homeCardCSS">
                        <Card.Img src={placeholder} variant="top" fluid width="500" />
                        <Card.Body>
                            <Card.Title>Titulo</Card.Title>
                            <Card.Text>Texto</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="homeCardCSS">
                        <Card.Img src={placeholder} variant="top" fluid width="500"/>
                        <Card.Body>
                            <Card.Title>Titulo</Card.Title>
                            <Card.Text>Texto</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}