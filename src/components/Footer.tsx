import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <Container>
            <div className="py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <span className="fs-5">Prograddict</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus in mollis.
                        </p>
                    </div>
                    <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Navbar.Text to='/' as={NavLink}>
                                    Inicio
                                </Navbar.Text>
                            </li>
                            <li>
                                <Navbar.Text to='/acerca' as={NavLink}>
                                    Acerca
                                </Navbar.Text>
                            </li>
                            <li>
                                <Navbar.Text to='/blogs' as={NavLink}>
                                    Blogs
                                </Navbar.Text>
                            </li>
                            <li>
                                <Navbar.Text to='/legalidad' as={NavLink}>
                                    Legalidad
                                </Navbar.Text>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 mb-3">
                        <p>Copyright 2023. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}