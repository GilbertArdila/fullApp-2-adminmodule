import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Layout from "../../layouts/layout/Layout";
import {
  getCategorias,
  getProductoById,
  saveProducto,
} from "../../api/productoApi";

const Edit = () => {
  const [geek, setGeek] = useState({});
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    searchproduct();
    searchcategory();
  }, []);

  const searchproduct = async () => {
    if (id !== "new") {
      const response = await getProductoById(id);
      setGeek(response);
    }
  };

  const searchcategory = async () => {
    const response = await getCategorias();
    setCategory(response);
  };

  const save = () => {
    saveProducto(geek);
  };

  const onSubmit = () => {
    save();
    navigate("/pages/geeks");
  };

  return (
    <Layout>
      {!geek && <h2>cargando</h2>}
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        {id === "new" ? "Add new Geek" : "Edit Geek"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Row>
            <Col xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  value={geek.name}
                  aria-label="Nombre"
                  {...(id === "new"
                    ? {
                        ...register("nombre", {
                          required: true,
                          minLength: 3,
                          maxLength: 30,
                        }),
                      }
                    : { ...register("nombre") })}
                  onChange={(e) => setGeek({ ...geek, name: e.target.value })}
                />
                {id === "new" && errors.nombre?.type === "required" && (
                  <p className="text-danger">El nombre es requerido</p>
                )}
                {id === "new" && errors.nombre?.type === "minLength" && (
                  <p className="text-danger">
                    El nombre debe tener al menos 3 caracteres
                  </p>
                )}
                {id === "new" && errors.nombre?.type === "maxLength" && (
                  <p className="text-danger">
                    El nombre debe tener menos de 30 caracteres
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>URL</Form.Label>
                <Form.Control
                  name="url"
                  type="text"
                  placeholder="URL"
                  {...(id === "new"
                    ? {
                        ...register("url", {
                          required: true,
                          pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                        }),
                      }
                    : { ...register("url") })}
                  value={geek.url}
                  onChange={(e) => setGeek({ ...geek, url: e.target.value })}
                />
                {id === "new" && errors.url?.type === "required" && (
                  <p className="text-danger">La url es requerida</p>
                )}
                {id === "new" && errors.url?.type === "pattern" && (
                  <p className="text-danger">La url debe ser valida</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  name="descripcion"
                  type="text"
                  placeholder="Descripción"
                  {...(id === "new"
                    ? {
                        ...register("descripcion", {
                          required: true,
                          minLength: 3,
                          maxLength: 30,
                        }),
                      }
                    : { ...register("descripcion") })}
                  value={geek.description}
                  onChange={(e) =>
                    setGeek({ ...geek, description: e.target.value })
                  }
                />
                {id === "new" && errors.descripcion?.type === "required" && (
                  <p className="text-danger">La descripcion es requerida</p>
                )}
                {id === "new" && errors.descripcion?.type === "minLength" && (
                  <p className="text-danger">
                    La descripcion debe tener al menos 3caracteres
                  </p>
                )}
                {id === "new" && errors.descripcion?.type === "maxLength" && (
                  <p className="text-danger">
                    La descripcion debe tener maximo 30 caracteres
                  </p>
                )}
              </Form.Group>
            </Col>
            <Col xs={3}>
              <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  name="price"
                  type="text"
                  placeholder="Precio"
                  {...(id === "new"
                    ? {
                        ...register("precio", {
                          required: true,
                        }),
                      }
                    : { ...register("precio") })}
                  value={geek.price}
                  onChange={(e) => setGeek({ ...geek, price: e.target.value })}
                />
                {id === "new" && errors.precio?.type === "required" && (
                  <p className="text-danger">El precio es requerido</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  name="quantity"
                  type="number"
                  placeholder="Cantidad"
                  {...(id === "new"
                    ? {
                        ...register("cantidad", {
                          required: true,
                          min: 1,
                        }),
                      }
                    : { ...register("cantidad") })}
                  value={geek.quantity}
                  onChange={(e) =>
                    setGeek({ ...geek, quantity: e.target.value })
                  }
                />
                {id === "new" && errors.cantidad?.type === "required" && (
                  <p className="text-danger">La cantidad es requerida</p>
                )}
                {id === "new" && errors.cantidad?.type === "min" && (
                  <p className="text-danger">La cantidad debe ser mayor a 0</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Select
                  {...(id === "new"
                    ? {
                        ...register("category"),
                      }
                    : { ...register("category") })}
                  name="categoryId"
                  aria-label="Categoria"
                  value={geek.category}
                  onChange={(e) => (geek.category = e.target.value)}
                >
                  <option value="">Categoria</option>
                  {category.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                size="lg"
                style={{ marginRight: "20px" }}
              >
                <i className="bi bi-check-square">{id != 'new'? ' Editar':' Crear'}</i>
              </Button>

              <Button
                variant="warning"
                type="button"
                size="lg"
                as={Link}
                to={`/pages/geeks`}
              >
                <i className="bi bi-x-square">{" Cancelar"}</i>
              </Button>
            </Col>
          </Row>
          {id != "new" ? (
        <img src={geek.url} alt={geek.name} style={{maxWidth:'300px',maxHeight:'350px'}} /> 
      ) : (
        null
      )}
        </Container>
      </form>

      

    </Layout>
  );
};

export default Edit;
