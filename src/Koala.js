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
import { Accordion } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';

import koalaGif from './images/koala-sm.gif';
import kelly1 from './sketches-gallery/kelly1.png';
import kelly2 from './sketches-gallery/kelly2.png';
import kelly3 from './sketches-gallery/kelly3.png';
import rachel1 from './sketches-gallery/rachel1.png';
import rachel2 from './sketches-gallery/rachel2.png';
import rachel3 from './sketches-gallery/rachel3.png';
import sean1 from './sketches-gallery/sean1.png';
import sean2 from './sketches-gallery/sean2.png';
import sean3 from './sketches-gallery/sean3.png';
import thomas1 from './sketches-gallery/thomas1.jpeg';
import thomas2 from './sketches-gallery/thomas2.jpeg';
import thomas3 from './sketches-gallery/thomas3.jpeg';
import studentsLogin from './low-fi-gallery/students-login.png';
import studentPOV from './low-fi-gallery/student-pov.png';
import tutorStudentPOV from './low-fi-gallery/tutor-student-pov.png';
import parentDashboard from './low-fi-gallery/parent-dashboard.png';
import parentSearchTutors from './low-fi-gallery/parent-search-tutors.png';
import parentBilling from './low-fi-gallery/parent-billing.png';
import tutorDashboard from './low-fi-gallery/tutor-dashboard.jpeg';
import tutorGames from './low-fi-gallery/tutor-games.png';
import tutorStudents from './low-fi-gallery/tutor-students.png';
import tutorSchedule from './low-fi-gallery/tutor-schedule.png';



// function Example() {
//   const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
//   const [fullscreen, setFullscreen] = useState(true);
//   const [show, setShow] = useState(false);

//   function handleShow(breakpoint) {
//     setFullscreen(breakpoint);
//     setShow(true);
//   }

//   return (
//     <>
//       {values.map((v, idx) => (
//         <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
//           Full screen
//           {typeof v === 'string' && `below ${v.split('-')[0]}`}
//         </Button>
//       ))}
//       <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Modal body content</Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default Example;


  




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

    // function HoverCard() {
    //     return (


    //         <div className="py-5">
    //             {/* <h3 className="font-weight-bold mb-0">Demo 1</h3> */}
    //             {/* <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
    //             <div className="row">
    //                 <div className="col-lg-6 mb-3 mb-lg-0" >
    //                     <div className="hover hover-1 text-white rounded"><img src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-3.jpg" alt=""/>
    //                     <div className="hover-overlay"></div>
    //                     <div className="hover-1-content px-5 py-4">
    //                         <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light">Image </span>Caption</h3>
    //                         <p className="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    //                     </div>
    //                     </div>
    //                 </div>

    //                 <div className="col-lg-6">
    //                     <div className="hover hover-1 text-white rounded"><img src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-4.jpg" alt=""/>
    //                     <div className="hover-overlay"></div>
    //                     <div className="hover-1-content px-5 py-4">
    //                         <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light">Image </span>Caption</h3>
    //                         <p className="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    //                     </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }


    function FsModal({showKoala}, {setShowKoala}) {
        const values = [true];
        const [fullscreen, setFullscreen] = useState(true);
        // const [show, setShow] = useState(false);
      
        // function handleShow(breakpoint) {
        //   setFullscreen(breakpoint);
        //   setShow(true);
        // }
      
        return (
          <>
          {/* change this from a button to a clickable card or something */}
            {/* {values.map((v, idx) => ( */}
            {/* //   <Button key={idx} className="me-2 mb-2" onClick={() => setShow(true)}>
            //     Full screen
            //   </Button>
                // <Card className='card' style={{ width: '18rem' }}>
                //     <Card.Img variant="top" src="holder.js/100px180" />
                //     <Card.Body>
                //         <Card.Title>Card Title</Card.Title>
                //         <Card.Text>
                //         Some quick example text to build on the card title and make up the
                //         bulk of the card's content.
                //         </Card.Text>
                //         <Button  className="me-2 mb-2" onClick={() => setShow(true)}>
                //         Full screen
                //         </Button>
                //     </Card.Body>
                // </Card> */}

                {/* <Container onClick={setShow(true)}> */}
                            


                    
                 {/* </Container> */}


            <div className="py-5">
                <div className="row">
                    <div className="col-lg-12 mb-3 mb-lg-0" > 
                        <a onClick={() => setShowKoala(true)}>
                            <div className="hover hover-1 text-white rounded" ><img src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-3.jpg" alt=""/>
                                <div className="hover-overlay"></div>
                                <div className="hover-1-content px-5 py-4" >
                                    <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light">Koala</span></h3>
                                    <p className="hover-1-description font-weight-light mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
          

            {/* ))} */}



            <Modal className='modal' 
                
                show={showKoala} 
           
                 onHide={() => setShowKoala(false)}>
              <Modal.Header className='modal-header' closeButton >
                <Modal.Title className='modal-title'>Koala</Modal.Title>
                {ModalNavbar()}
              </Modal.Header>
              

              {/* <Modal.Body className='modal-body'> */}

                <div id='modal-home' className='p-5'>
                    {/* style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, height: "100vh"}}> */}
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height:"100vh"}}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='boujee-text'>Koala</h1>
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

                  
                  

              {/* </Modal.Body> */}
            </Modal>
          </>
        );
    }


    function InitialSketches() {
        return (
          <Accordion alwaysOpen>
              
            <Accordion.Item eventKey="1">
              <Accordion.Header>Sketch Set 1</Accordion.Header>
              <Accordion.Body>
                  <div className='md-flex'>
                      <Figure>
                          <Figure.Image className='sketch' src={sean1}/>
                          <Figure.Caption className='sketch-text'>Log-in, Instructor log-in, Landing Page</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={sean2}/>
                          <Figure.Caption className='sketch-text'>Games, Check-out, Forgot Password</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={sean3}/>
                          <Figure.Caption className='sketch-text'>Game Interface, Meeting Settings, Student page</Figure.Caption>
                      </Figure>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Sketch Set 2</Accordion.Header>
              <Accordion.Body>
                  <div className='md-flex'>
                      <Figure>
                          <Figure.Image className='sketch' src={kelly1}/>
                          <Figure.Caption className='sketch-text'>Game Interface</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={kelly2}/>
                          <Figure.Caption className='sketch-text'>Landing Page</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={kelly3}/>
                          <Figure.Caption className='sketch-text'>Marketplace</Figure.Caption>
                      </Figure>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Sketch Set 3</Accordion.Header>
              <Accordion.Body>
                  <div className='md-flex'>
                      <Figure>
                          <Figure.Image className='sketch' src={rachel1}/>
                          <Figure.Caption className='sketch-text'>Opening Page</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={rachel2}/>
                          <Figure.Caption className='sketch-text'>Tutor Landing Page</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={rachel3}/>
                          <Figure.Caption className='sketch-text'>Profile Page</Figure.Caption>
                      </Figure>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Sketch Set 4</Accordion.Header>
              <Accordion.Body>
                  <div className='md-flex'>
                      <Figure>
                          <Figure.Image className='sketch' src={thomas1}/>
                          <Figure.Caption className='sketch-text'>Game Interface</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={thomas2}/>
                          <Figure.Caption className='sketch-text'>Tutor Profile</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={thomas3}/>
                          <Figure.Caption className='sketch-text'>Student Interface</Figure.Caption>
                      </Figure>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            
          </Accordion>
        );
      }

    function LoFiSketches() {
        return (
          <Accordion alwaysOpen>
              
            <Accordion.Item eventKey="1">
              <Accordion.Header>All Users:</Accordion.Header>
              <Accordion.Body>
                  <div className='md-flex'>
                      <Figure>
                          <Figure.Image className='sketch' src={studentsLogin}/>
                          <Figure.Caption className='sketch-text'>Shared Login Screen</Figure.Caption>
                      </Figure>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Students</Accordion.Header>
              <Accordion.Body>
                  <div className='md-flex'>
                      <Figure>
                          <Figure.Image className='sketch' src={studentsLogin}/>
                          <Figure.Caption className='sketch-text'>Game Interface</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={kelly2}/>
                          <Figure.Caption className='sketch-text'>Landing Page</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={kelly3}/>
                          <Figure.Caption className='sketch-text'>Marketplace</Figure.Caption>
                      </Figure>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Parents</Accordion.Header>
              <Accordion.Body>
                  <div className='md-flex'>
                      <Figure>
                          <Figure.Image className='sketch' src={rachel1}/>
                          <Figure.Caption className='sketch-text'>Opening Page</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={rachel2}/>
                          <Figure.Caption className='sketch-text'>Tutor Landing Page</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={rachel3}/>
                          <Figure.Caption className='sketch-text'>Profile Page</Figure.Caption>
                      </Figure>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Tutors</Accordion.Header>
              <Accordion.Body>
                  <div className='md-flex'>
                      <Figure>
                          <Figure.Image className='sketch' src={thomas1}/>
                          <Figure.Caption className='sketch-text'>Game Interface</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={thomas2}/>
                          <Figure.Caption className='sketch-text'>Tutor Profile</Figure.Caption>
                      </Figure>
                      <Figure>
                          <Figure.Image className='sketch' src={thomas3}/>
                          <Figure.Caption className='sketch-text'>Student Interface</Figure.Caption>
                      </Figure>
                  </div>
              </Accordion.Body>
            </Accordion.Item>
            
          </Accordion>
        );
      }

    
    var backgroundKoalaColor = 'rgb(163, 177, 138)'
    

    return (
        <>   
            <Modal className='modal' 
                
                show={props.showKoala} 
           
                 onHide={() => props.setShowKoala(false)}>
              <Modal.Header className='modal-header' closeButton >
                <Modal.Title className='modal-title'>Koala</Modal.Title>
                {ModalNavbar()}
              </Modal.Header>
              

              {/* <Modal.Body className='modal-body'> */}

                <div id='modal-home' className='p-5'>
                    {/* style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, height: "100vh"}}> */}
                    <div className='mask' style={{ backgroundColor: backgroundKoalaColor, height:"100vh"}}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div id='textBox' className='text-white'>
                                <div className='row'>
                                    <div className='col koala-header-text' >
                                        <h1 style={{marginBottom: '2rem'}} className='display-1'>Koala</h1>
                                        <h4 className='mb-3'>Iteratively designed an interactive interface for an emerging startup</h4>
                                    </div>
                                    <div className='col'>
                                        <img src={koalaGif} style={{width: '20rem', height: '20rem'}}></img>
                                    </div>
                                </div>
                                {/* <h5 className='mb-3'>—— studying Computer Science @ Brown</h5> */}
                            </div>
                        </div>
                    </div>
                </div>

              
                < div className='modal-body' id='context' >
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-black'>
                            <h1  className='display-4 mb-5'>Context</h1>
                            <div className='row '>
                                <div className='col two-col'>
                                    <h2 className='mb-3 '>Overview </h2>
                                    <h5 className='mb-3'> We were tasked with choosing a accelerator startup from S22, W22, or W23 and designing an interface based purely off of the concept listed on the accelerator. In order to achieve this, we'd like to share our low-fidelity mockups and sketches that represent the imagined interface. Then, you will get to explore our high-fidelity mockups which took our low-fidelity mockups and brought them to life through Figma. In the final components of our work, we garned results from UserTesting to understand how effective and easily usable our interface is.</h5>
                                </div>
                                <div className='col two-col'>
                                    <h2 className='mb-3'>Koala </h2>
                                    <h5 className='mb-3'> Koala is an all-in-one tool for online tutors! Its main goal is serve as an effective tool for tutors to engage with students who actively struggle with Zoom fatigue and online learning. In solving this problem, Koala equips tutors with educational games that engage students suffering from these conditions more effectively than traditional online teaching methods. In implementing this, Koala itself serves as not only a teaching space, but also a marketplace for tutors, parents, and students alike.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                < div className='modal-body' id='research' style={{ backgroundColor: backgroundKoalaColor}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-white'>
                            <h1 className='display-4 mb-5'>Research</h1>
                            <h1>Sketches</h1>
                            <h5 className='mb-3'>Upon hearing the descrption, our team proposed initial sketches as follows</h5>
                            {InitialSketches()}

                        </div>
                    </div>
                </div>
                < div className='modal-body' id='design-iterations' >
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-black'>
                            <h1 className='display-4 mb-5'>Design Iterations</h1>
                            <h2 className='mb-3 '>Low-Fidelity Sketches </h2>
                            <h5 className='mb-3'>After discussion, our team cohesively synthesized
                        our 12 sketches into a low-fidelity replica which represented three interfaces
                        for the three types of users: students, tutors, and parents.</h5>
                            <h5 className='mb-3'>Based on the user type, the interface would need to have different components:</h5>
                            {LoFiSketches()}
                            <h2 className='mb-3 '>High-Fidelity Sketches </h2>

                        </div>
                    </div>
                </div>
                < div className='modal-body' id='conclusion' style={{ backgroundColor: backgroundKoalaColor}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div id='textBox' className='text-white'>
                            <h1 className='display-4 mb-5'>Conclusion</h1>
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