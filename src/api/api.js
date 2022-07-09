import axios from "axios";

const server = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

//get all products asynchronously
const getAllProducts = async () => {
  const data = await server
    .get("/")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
  return data;
};

//get one product asynchronously
const getProduct = async (id) => {
  const { data } = await server.get(`/${id}`);
  return data;
};

//create a new product asynchronously
const createProduct = async (product) => {
  const { data } = await server.post("/", product);
  return data;
};
//update a product asynchronously
const updateProduct = async (id, product) => {
  const { data } = await server.put(`/${id}`, product);
  return data;
};
//delete a product asynchronously
const deleteProduct = async (id) => {
  const { data } = await server.delete(`/${id}`);
  return data;
};

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
