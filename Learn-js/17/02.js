console.log("start"); // 1

setTimeout(() => {
  // 4
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  // 3
  console.log("promise");
});

console.log("end"); // 2
