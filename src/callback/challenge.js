const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

function fetchData(url, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = function (event) {
    /**
     * readyState
     * 0 no inicializado
     * 1 loading
     * 2 se ejecuto send
     * 3 descargando
     * 4 llamada completa
     */
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error: ${xhttp.status} - ${url}`);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

// Callback Hell
fetchData(`${API}/products`, (error1, data1) => {
  if (error1) return console.error(error1);

  fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
    if (error2) return console.error(error2);

    fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
      if (error3) return console.error(error3);

      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});
