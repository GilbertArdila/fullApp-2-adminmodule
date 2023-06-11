import axios from "axios";
import { URL } from "./api";

export async function getProductos() {
  const response = await axios.get(`${URL}/geeks`);
  return response.data;
}

export async function getProductoById(id) {
  const response = await axios.get(`${URL}/geeks/${id}`);
  return response.data;
}

export async function saveProducto(producto) {
  const id = producto.id;

  if (id) {
    delete producto.id;
    const response = await axios.put(`${URL}/geeks/${id}`, producto);
    return response.data;
  } else {
    const response = await axios.post(`${URL}/geeks`, producto);
    return response.data;
  }
}

export async function deleteProducto(id) {
  const response = await axios.delete(`${URL}/geeks/${id}`);
  return response.data;
}

export async function getCategorias() {
  const response = await axios.get(`${URL}/categories`);
  return response.data;
}