import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from './MainNavbar.module.css'
import Register from "../pages/Register";
import { Link } from "react-router-dom";


function MainNavbar() {
  function onRegister(){
    return <Register/>
  }
  return (
    <header className="top-fixed">
      {[ 'md', ].map((expand) => (
        <Navbar key={expand}  expand={expand} className={classes.navbar}>
          <Container fluid>
          <Link to="/"><Navbar.Brand href="" className={classes.brand}>J<span>4</span>U</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  J4U
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                <Nav className="justify-content-end  flex-grow-1 pe-3  mx-4">
                <Link to="/jobs"><Nav.Link href="#jobs" className={classes.items}>JOBS</Nav.Link></Link>
                  <Link to="/companies"><Nav.Link href="#companies"   className={classes.items}>COMPANIES</Nav.Link></Link>
                  <Link to="/blog"><Nav.Link href="#blog" className={classes.items}>BLOG</Nav.Link></Link>
                  <Link to="/contact"><Nav.Link href="#contact" className={classes.items}>CONTACT</Nav.Link></Link>
                </Nav>
                
                <Button  variant="primary" className="d-flex ms-4 fs-6 p-1" onClick={onRegister}> REGISTER NOW</Button>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
}

export default MainNavbar;