import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Marquee from "react-fast-marquee";
import Koala from './Koala'
import KoKo from './KoKo'
import Personas from './Personas'
import Consume from './Consume'

import works from './works.json'


// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Card } from 'react-bootstrap';


  







function MyNavbar() {
    // const [active, setActive] = useState('home');


  return (
    <>
      {['md'].map((expand) => (
          
        // <div id='entireNav'>
            <Navbar id="navbar" key={expand}  bg="light" expand={expand} className="mb-3" fixed='top' >
                <Container>
                    <Navbar.Brand  href="#">
                        <div className='boujee-text-dark'>
                            tiredcoder714
                        </div>
                    </Navbar.Brand>
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
                        <Nav  
                        // activeKey={active}
                        // onSelect={(selectedKey) => setActive(selectedKey)}
                        className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link class="nav-link boujee-text-dark"  href="#about">
                                    About
                                {/* </div> */}
                                </Nav.Link>
                            <Nav.Link class="nav-link boujee-text-dark"  href="#work">
                                {/* <div className='boujee-text-dark'> */}
                                    Work
                                {/* </div> */}
                            </Nav.Link>
                            <Nav.Link class="nav-link boujee-text-dark" href="#contact">
                                {/* <div className='boujee-text-dark'> */}
                                    Contact
                                {/* </div> */}
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
              
        // </div>
        
      ))}
        
    </>
  );
}






function App(props) {

    // const [currPage, setCurrPage] = useState("Home");
    const [showKoala, setShowKoala] = useState(false);
    const [showKoKo, setShowKoKo] = useState(false);
    const [showConsume, setShowConsume] = useState(false);
    const [showPersonas, setShowPersonas] = useState(false);


    return (
        <div id="app" className="App" style={{backgroundColor: '#e5e5e5'}}>  
            {MyNavbar()}
            
            <header style={{height: "100vh"}}>
                <div id="home" className='p-5  bg-image'
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, height: "100vh"}}>
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height:"100vh"}}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='boujee-text-header'>Hi, I'm tiredcoder714! </h1>
                                <h4 className='mb-3'>Passionate about finding creative solutions for social good through technology</h4>
                                <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
            

        
          
            < div id='about' style={{backgroundColor: '#262626', height: "100vh"}}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div id='textBox' className='text-white'>
                        <h1 className='boujee-text'>About </h1>
                        <h5 className='mb-3'>Passionate about finding creative solutions for social good through technology</h5>
                        <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                    </div>
                </div>
            </div>

            < div id='work' style={{ minHeight: "100vh"}}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div id='textBox' className='text-black'>
                        <h1 className='boujee-text-dark'>Work </h1>
                        <div className="py-5">
                            <div className="row workRow">
                                <div className="col-lg-12 mb-3 mb-lg-0" > 
                                    <a onClick={() => setShowKoala(true)}>
                                        <div className="hover hover-1 text-white rounded" ><img src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-3.jpg" alt=""/>
                                            <div className="hover-overlay"></div>
                                            <div className="hover-1-content px-5 py-4" >
                                                <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light">Koala</span></h3>
                                                <p className="hover-1-description font-weight-light mb-0">Iteratively designed an interactive interface for an emerging startup</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>


                            <div className="row workRow">
                                <div className="col-lg-12 mb-3 mb-lg-0" > 
                                    <a onClick={() => setShowKoKo(true)}>
                                        <div className="hover hover-1 text-white rounded" ><img src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-3.jpg" alt=""/>
                                            <div className="hover-overlay"></div>
                                            <div className="hover-1-content px-5 py-4" >
                                                <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light">KoKo Chicken</span></h3>
                                                <p className="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="row workRow">
                                <div className="col-lg-12 mb-3 mb-lg-0" > 
                                    <a onClick={() => setShowConsume(true)}>
                                        <div className="hover hover-1 text-white rounded" ><img src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-3.jpg" alt=""/>
                                            <div className="hover-overlay"></div>
                                            <div className="hover-1-content px-5 py-4" >
                                                <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light">Consume @ Brown</span></h3>
                                                <p className="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="row workRow">
                                <div className="col-lg-12 mb-3 mb-lg-0" > 
                                    <a onClick={() => setShowPersonas(true)}>
                                        <div className="hover hover-1 text-white rounded" ><img src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-3.jpg" alt=""/>
                                            <div className="hover-overlay"></div>
                                            <div className="hover-1-content px-5 py-4" >
                                                <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light">Personas and Storyboarding</span></h3>
                                                <p className="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* these are modals */}
                        <Koala showKoala = {showKoala} setShowKoala = {setShowKoala}></Koala>
                        <KoKo showKoKo = {showKoKo} setShowKoKo = {setShowKoKo}></KoKo>
                        <Consume showConsume = {showConsume} setShowConsume = {setShowConsume}></Consume>
                        <Personas showPersonas = {showPersonas} setShowPersonas = {setShowPersonas}></Personas>
                        

                        <h5 className='mb-3'>Passionate about finding creative solutions for social good through technology</h5>
                        <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>

                    </div>
                </div>
            </div>

            < div id='contact' style={{backgroundColor: '#262626', height: "100vh"}}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div id='textBox' className='text-white'>
                        <h1 className='boujee-text'>Contact </h1>
                        <h5 className='mb-3'>Passionate about finding creative solutions for social good through technology</h5>
                        <h5 className='mb-3'>—— studying Computer Science @ Brown</h5>
                    </div>
                </div>
            </div>
            
            
            <div className='marquee-holder' >
                <Marquee className='marquee' gradient={false}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee> 
            </div>



        </div>
    


    );
}

export default App;
