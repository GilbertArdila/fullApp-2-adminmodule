import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

import "./index.css";

function Menu() {
  return (
    <>
      <Navbar bg="primary" variant="dark" style={{ height: "80px" }}>
        <Container>
          <Navbar.Brand
            as={Link}
            to="/pages/geeks"
            style={{ left: "0", fontSize: "2rem" }}
          >
            The GeekStore
          </Navbar.Brand>
          <Nav
            className="me-auto"
            style={{ position: "relative", left: "50%", fontSize: "2rem" }}
          >
            <Nav.Link
              as={Link}
              to="/pages/geeks"
              style={{ marginRight: "50px" }}
            >
              Lista de productos
            </Nav.Link>
            <Nav.Link as={Link} to="/pages/geek/new">
              Nuevo producto
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default Menu;
