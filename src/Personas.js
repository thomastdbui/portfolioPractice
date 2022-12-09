import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Marquee from "react-fast-marquee";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import CardHeader from 'react-bootstrap/esm/CardHeader';




  




function Work(props) {


    function ModalNavbar() {
      return (
        <>
          {['md'].map((expand) => (
                <Navbar id="modal-navbar" key={expand}  bg="light" expand={expand} className="mb-3" sticky='top' >
                    <Container>
                        {/* <Navbar.Brand href="#">tiredcoder714</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav  
                            // activeKey={active}
                            // onSelect={(selectedKey) => setActive(selectedKey)}
                            className="justify-content-center flex-grow-1 pe-3">
                                <Nav.Link className="nav-link"  href="#context">Context</Nav.Link>
                                <Nav.Link className="nav-link"  href="#research">Research</Nav.Link>
                                <Nav.Link className="nav-link"  href="#design-iterations">Design Iterations</Nav.Link>
                                <Nav.Link className="nav-link" href="#conclusion">Conclusion</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
          ))} 
        </>
      );
    }

  


    

      
    

    return (
        <>   
            <Modal className='modal' 
                
                show={props.showPersonas} 
           
                 onHide={() => props.setShowPersonas(false)}>
              <Modal.Header className='modal-header' closeButton >
                <Modal.Title className='modal-title'>Personas and Storyboarding</Modal.Title>
                {ModalNavbar()}
              </Modal.Header>
              

              {/* <Modal.Body className='modal-body'> */}

                <div id='modal-home' className='p-5'>
                    {/* style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, height: "100vh"}}> */}
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height:"100vh"}}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='boujee-text'>Personas and Storyboarding</h1>
                                <h4 className='mb-3'>Passionate about finding creative solutions for social good through technology</h4>
                                <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                            </div>
                        </div>
                    </div>
                </div>

              
                < div className='modal-body' id='context' style={{backgroundColor: '#262626', height: "75vh"}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-5'>Context</h1>
                            <h5 className='mb-3'>Passionate about finding creative solutions for social good through technology</h5>
                            <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                        </div>
                    </div>
                </div>
                < div className='modal-body' id='research' style={{ height: "75vh" }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-black'>
                            <h1 className='mb-5'>Research</h1>
                            <h5 className='mb-3'>Passionate about finding creative solutions for social good through technology</h5>
                            <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                        </div>
                    </div>
                </div>
                < div className='modal-body' id='design-iterations' style={{backgroundColor: '#262626', height: "75vh"}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-5'>Design Iterations</h1>
                            <h5 className='mb-3'>Passionate about finding creative solutions for social good through technology</h5>
                            <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                        </div>
                    </div>
                </div>
                < div className='modal-body' id='conclusion' style={{ height: "75vh" }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-black'>
                            <h1 className='mb-5'>Conclusion</h1>
                            <h5 className='mb-3'>Passionate about finding creative solutions for social good through technology</h5>
                            <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                        </div>
                    </div>
                </div>
            </Modal>
          </>
        
    )
}

export default Work;