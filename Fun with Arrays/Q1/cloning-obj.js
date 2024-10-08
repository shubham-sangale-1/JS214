function cloningObjects(person) {
  return (presonCopy = { ...person });
}

const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }
