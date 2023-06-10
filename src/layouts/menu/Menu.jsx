import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

import './index.css';

function Menu() {
  return (
    <>
    <Navbar bg="primary" expand="lg" style={{height:'80px',fontSize:'large'}} >
      <Container>
        <Navbar.Brand as={Link} to='/pages/geeks' style={{fontSize:'24px',zIndex:'10'}}>The GeekStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " style={{position:'relative',left:'70%'}}>
            <Nav.Link  as={Link} to='/pages/geeks' style={{margin: '0 50px'}}>Lista</Nav.Link>
            <Nav.Link  as={Link} to='/pages/geek/new' style={{margin: '0 50px'}}>Nuevo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
        <Outlet></Outlet>
    </section>
    </>
  );
}



export default Menu