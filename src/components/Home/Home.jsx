import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';


import Layout from "../../layouts/layout/Layout"
import { getProductos, saveProducto } from "../../api/productoApi";
import { Link } from "react-router-dom";


const Home = () => {

  const [geeks, setGeeks] = useState([]);
  const [search, setSearch] = useState('');
 


  useEffect(() => {
    save();
  }, [geeks])

  const save = async () => {
    const response = await getProductos();
    setGeeks(response);
  }

  const removeProducto =  (id) => {
     saveProducto(id);
    save();
  }

  const addProducto = () => {
    <Link to="/pages/geek/new" />
  }

  const editProducto = (id) => {
    <Link to={`/pages/geek/${id}`} />
  }

  const busqueda = (e) => {
    setSearch(e.target.value);
  }

  let filteredGeeks = !search ? geeks : geeks.filter(geek => geek.nombre.toLowerCase()
  .includes(search.toLowerCase()));


  return (
    <Layout >
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2>The GeekStore</h2>
          <div className="btn-toolbar mb-2 mb-md-0">
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={addProducto}>Agregar</button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <input type="text" placeholder="Buscar" onChange={busqueda}/>
      </div>
     <Table striped bordered hover>
      <thead style={{ width: "100%" }}>
        <tr>
          <th style={{ width: "1/10" }}>Nombre</th>
          <th style={{ width: "1/10" }}>Categoria</th>
          <th style={{ width: "2/10" }}>Descripcion</th>
          <th style={{ width: "1/10" }}>Precio</th>
          <th style={{ width: "1/10" }}>Cantidad</th>
          <th style={{ width: "2/10" }}>Url</th>
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
            <td>{geek.url}</td>
            <td>
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => editProducto(geek.id)}>Editar</button>
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => removeProducto(geek.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
       
      </tbody>
    </Table>
    </Layout>
  )
}

export default Home