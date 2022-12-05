import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import sunset from './images/sunset.jpg';






function Navbar() {

  return (
    <>
      {['md'].map((expand) => (

            <Navbar id="navbar" key={expand}  bg="light" expand={expand} className="mb-3" fixed= "top" >
                <Container>
                    <Navbar.Brand href="#app">tiredcoder714</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            tiredcoder714
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>  

                        
                        <Nav className="justify-content-end flex-grow-1 pe-3">

                            <Nav.Link class="nav-link" href="#about">About</Nav.Link>
                            <Nav.Link class="nav-link" href="#work">Work</Nav.Link>
                            <Nav.Link class="nav-link" href="#contact">Contact</Nav.Link>

                        </Nav>


                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
      ))}
    </>
  );
}




function App(props) {

    // const [currPage, setCurrPage] = useState("Home");
  
    return (
        <div id="app" className="App" style={{backgroundColor: '#e5e5e5'}}>  
            <header style={{height: "100vh"}}>
                {Navbar()}
                <div id="bg-img" className='p-5  bg-image'
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, height: "100vh"}}>
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height:"100vh"}}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Hi, I'm tiredcoder714! </h1>
                                <h4 className='mb-3'>Passionate about finding creative solutions for social good through technology</h4>
                                <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </header>    
          
            < div id='about' style={{backgroundColor: '#262626', height: "100vh"}}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-5'>About </h1>
                        <h5 className='mb-3'>Passionate about finding creative solutions for social good through technology</h5>
                        <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                    </div>
                </div>
            </div>

            < div id='work' style={{ height: "100vh"}}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-black'>
                        <h1 className='mb-5'>Work </h1>
                        <h5 className='mb-3'>Passionate about finding creative solutions for social good through technology</h5>
                        <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                    </div>
                </div>
            </div>

            < div id='contact' style={{backgroundColor: '#262626', height: "100vh"}}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-5'>Contact </h1>
                        <h5 className='mb-3'>Passionate about finding creative solutions for social good through technology</h5>
                        <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default App;
