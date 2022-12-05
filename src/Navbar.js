import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css'

function navbar() {
  return (
    <>
      {['md'].map((expand) => (
        // <div className='navbar'>

            <Navbar key={expand} bg="light" expand={expand} className="mb-3" sticky="top" >
                <Container>
                    <Navbar.Brand href="#">tiredcoder714</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>                     
                       
                        <Nav  className="justify-content-end flex-grow-1 pe-3">

                            <Nav.Link class="nav-link" href="#About">About</Nav.Link>
                            <Nav.Link class="nav-link" href="#Work">Work</Nav.Link>
                            <Nav.Link class="nav-link" href="#Contact">Contact</Nav.Link>
                            {/* <NavDropdown
                                title="Work"
                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>


                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>



      ))}
    </>
  );
}

export default navbar;