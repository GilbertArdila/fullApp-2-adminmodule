import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Layout from "../../layouts/layout/Layout";
import { getProductos, deleteProducto } from "../../api/productoApi";

const Home = () => {
  const [geeks, setGeeks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
   
      save();
    
  }, [geeks]);

  const save = async () => {
    const response = await getProductos();
    setGeeks(response);
  };

  const removeProducto = async (id) => {
    deleteProducto(id);
    save();
  };

  const busqueda = (e) => {
    setSearch(e.target.value);
  };

  let filteredGeeks = !search
    ? geeks
    : geeks.filter(
        (geek) =>
          geek.name.toLowerCase().includes(search.toLowerCase()) ||
          geek.category.name.toLowerCase().includes(search.toLowerCase()) ||
          geek.description.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <Layout>
      <div style={{ padding: "10px" }}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2>The GeekStore</h2>
          <div className="btn-toolbar mb-2 mb-md-0">
            <Button
              variant="outline-primary"
              size="lg"
              as={Link}
              to={`/pages/geek/new`}
            >
              <i className="bi bi-plus-circle"></i>
            </Button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <input type="text" placeholder="Buscar" onChange={busqueda} />
      </div>
      <Table striped bordered hover>
        <thead style={{ width: "100%" }}>
          <tr>
            <th style={{ width: "1/10" }}>Nombre</th>
            <th style={{ width: "1/10" }}>Categoria</th>
            <th style={{ width: "3/10" }}>Descripcion</th>
            <th style={{ width: "1/10" }}>Precio</th>
            <th style={{ width: "1/10" }}>Cantidad</th>
           
            <th style={{ width: "3/10" }}></th>
          </tr>
        </thead>
        <tbody>
          {filteredGeeks.map((geek) => (
            <tr key={geek.id}>
              <td>{geek.name}</td>
              <td>{geek.category.name}</td>
              <td>{geek.description}</td>
              <td>{geek.price}</td>
              <td>{geek.quantity}</td>
              
              <td
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <Button
                  type="button"
                  variant="outline-warning"
                  size="lg"
                  as={Link}
                  to={`/pages/geek/${geek.id}`}
                >
                  <i className="bi bi-pencil"></i>
                </Button>
                <Button
                  type="button"
                  variant="outline-danger"
                  size="lg"
                  onClick={() => removeProducto(geek.id)}
                >
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
};

export default Home;
