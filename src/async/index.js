const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async!"), 2000)
      : reject(new Error("ErrorAsync"));
  });
};

const anotherFn = async () => {
  const somethig = await fnAsync();
  console.log(somethig);
  console.log("Hello async!");
}

console.log("Before");
anotherFn();
console.log("After");