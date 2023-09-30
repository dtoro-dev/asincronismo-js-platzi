import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function $(url, data, method) {
  const res = fetch(url, {
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    method,
  });

  return res;
}

const data = {
  title: "New Product DtoroDev",
  price: 1900000,
  description: "Developer fullstack",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

$(`${API}/products`, data, "POST")
  .then((res) => res.json())
  .then((data) => console.log(data));

$(`${API}/products/207`)
  .then((res) => res.json())
  .then((data) => console.log(data));