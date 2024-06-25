import { Nav, Navbar, Container, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function GlobalNav () {
    const navigate = useNavigate();

    return (
        <Navbar 
            data-bs-theme="light" 
            fixed="top"
            className="bg-white"
        >
            <Container
                className="justify-content-between py-3"    
            >
                <Navbar.Brand href="/">
                    <Image src='assets/logo.png' style={{width: '36px'}}/>
                </Navbar.Brand>
                <div className="d-flex">
                <Nav
                    defaultActiveKey="/"
                    variant="underline"
                    className="me-4"
                    onSelect={(selectedKey) => navigate(selectedKey)}
                >
                    <Nav.Item>
                        <Nav.Link href="/">Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/creative">Creative</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/about">About</Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* <Nav>
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/in/irene-dinh-8a119b18b/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Nav.Link>
                    </Nav.Item>
                </Nav> */}
                </div>
            </Container>
        </Navbar>
    )
}