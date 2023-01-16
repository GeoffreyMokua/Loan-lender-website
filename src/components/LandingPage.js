import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function LandingPage (){
  
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Loan Lender</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="jumbotron text-center">
          <h1 className="display-4">Welcome to Loan Lender</h1>
          <p className="lead">We offer a variety of loan options to fit your needs.</p>
          <hr className="my-4" />
          <p>Ready to apply? Click the button below to get started.</p>
          <p className="lead">
            <Button variant="primary" href="#apply">Apply Now</Button>
          </p>
        </div>
        <footer className="page-footer font-small bg-light">
          <div className="footer-copyright text-center py-3">
            © {new Date().getFullYear()} Copyright: <a href="https://loanlender.com"> Loan Lender</a>
          </div>
        </footer>
      </div>
    );
  }


export default LandingPage;