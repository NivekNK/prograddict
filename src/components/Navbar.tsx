import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <NavbarBs expand="lg">
            <Container>
                <NavbarBs.Brand to="/" as={NavLink}>
                    Prograddict
                </NavbarBs.Brand>
                <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBs.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink}>
                            Inicio
                        </Nav.Link>
                        <Nav.Link to="/acerca" as={NavLink}>
                            Acerca
                        </Nav.Link>
                        <Nav.Link to="/blogs" as={NavLink}>
                            Blogs
                        </Nav.Link>
                        <Nav.Link to="/legalidad" as={NavLink}>
                            Legalidad
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link to="/ingresar" as={NavLink}>
                            <Button style={{marginRight:"5px"}} variant="primary">Ingresar</Button>
                        </Nav.Link>
                        <Nav.Link to="/registrar" as={NavLink}>
                            <Button variant="outline-primary">Registrar</Button>
                        </Nav.Link>
                    </Nav>
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>
    )
}