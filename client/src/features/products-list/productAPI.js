export function fetchProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    console.log(response);
    const data = await response.json();
    resolve({ data });
  });
}


export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/"+id);
    const data = await response.json();
    resolve({ data });
  });
}
