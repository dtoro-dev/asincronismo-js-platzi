import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

async function $(url, data, method) {
  const res = await fetch(url, {
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    method,
  });

  const dataJson = await res.json();

  return dataJson;
}

const anotherFn = async (url) => {
  try {
    const products = await $(`${url}/products`);
    const product = await $(`${url}/products/${products[0].id}`);
    const category = await $(`${url}/categories/${product.category.id}`);

    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (err) {
    console.error(err);
  }
};

anotherFn(API);
