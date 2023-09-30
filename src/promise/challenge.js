import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function $(url) {
  return fetch(url);
}

// $(`${API}/products`)
//   .then((res) => res.json())
//   .then((products) => console.log(products))
//   .then(() => console.log("Hola Test"))
//   .catch((err) => console.error(err));

$(`${API}/products`)
  .then((res) => res.json())
  .then((products) => {
    console.log(products);
    return $(`${API}/products/${products[0].id}`);
  })
  .then((res) => res.json())
  .then((product) => {
    console.log(product.title);
    return $(`${API}/categories/${product.category.id}`);
  })
  .then((res) => res.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((err) => console.error(err))
  .finally(() => console.log("Valio madres"));
