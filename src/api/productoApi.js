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
  const info = { ...producto };
  delete info.category;
  info.categoryId = producto.category;

  if (id) {
    delete info.id;
    const response = await axios.patch(`${URL}/geeks/${id}`, info);
    return response.data;
  } else {
    const response = await axios.post(`${URL}/geeks`, info);
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
