const promise = new Promise(function (resolve, reject) {
  resolve("hey!");
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There is no cows on the farm");
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
}).finally(() => console.log("finally completed"));

// Playgroud Platzi
export function delay(time, message) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(message);
    }, time);
  });
}

delay(2000, "Hello after 2s").then((message) => console.log(message));

delay(3000, "Hello after 3s").then((message) => console.log(message));