import { Nav, Navbar, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function GlobalNav () {
    const navigate = useNavigate();

    return (
        <Navbar 
            data-bs-theme="dark" 
            fixed="top"
        >
            <Container
                className="justify-content-end"    
            >
                <Nav
                    defaultActiveKey="/"
                    variant="underline"
                    className="me-4"
                    onSelect={(selectedKey) => navigate(selectedKey)}
                >
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/coding">Developer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/design">Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/about">About</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="https://github.com">
                            <FontAwesomeIcon icon={faGithub} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://linkedin.com">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}